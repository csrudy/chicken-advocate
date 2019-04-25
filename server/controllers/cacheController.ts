import { Request, Response, NextFunction } from "express";
import { redisController } from "./redis/redisController";
import * as async from "async";

export const cacheController = {
  checkCache: async (req: Request, res: Response, next: NextFunction) => {
    // if the route is initialize, we need to send
    // zipcode data, restaurant_name data, and topten restaurants
    if (req.route.path === "/initialize") {
      const cacheObj = {};
      const tableNames = ["zipcode", "topten", "restaurant_names"];

      const promiseArr = tableNames.map(tbName => {
        return new Promise((resolve, reject) => {
          console.log(
            `[cacheController:14] Entering redisController.setActions to retrieve data from ${tbName}`
          );
          redisController.setActions
            .getAll(tbName)
            .then(reply => {
              console.log(`[REDIS] Obtained records from set table: ${tbName}`);
              cacheObj[tbName] = reply;
              resolve();
            })
            .catch(err => {
              res.locals.readThrough = res.locals.readThrough || [];
              res.locals.readThrough.push(tbName);
              resolve();
            });
        });
      });

      Promise.all(promiseArr).then(success => {
        if (Object.keys(cacheObj).length === tableNames.length) {
          return res.send(cacheObj);
        }
        console.log(`[cacheController] Querying the DB for`, res.locals.readThrough);
        next();
      });
    }
  },

  writeCache: (req: Request, res: Response, next: NextFunction) => {
    const setTables = ["zipcode", "topten", "restaurant_names"];
    const promiseArr = Object.entries(res.locals.dbReturned).forEach(
      (tbNameValue: [string, {}[] | string[]]) => {
        // Object.entries(tbName).forEach((kv: [string, {}[] | string[]]) => {
        const [tbName, v] = tbNameValue;
        if (Array.isArray(v)) {
          v.forEach(val => {
            redisController.setActions
              .set(tbName, val)
              .then(reply => {
                console.log(`[REDIS] Inserted ${val} to ${tbName}`);
              })
              .catch(err => {
                console.error(`[REDIS ERROR] Cannot insert ${val} to ${tbName}`);
              });
          });
        }
        // v.forEach(restaurantObject => {
        //   redisController.hashActions.set(tbName,)
        // })
        // });
      }
    );
    // async.each(Object.entries(res.locals.dbReturned), (kv: [string, any[]], cb) => {
    //   const [key, valueArr] = kv;
    //   if (setTables.includes(key)) {
    //     async.each(valueArr, (val, cb) => {
    //       redisController.setActions
    //         .set(key, val)
    //         .then(reply => {
    //           console.log(`[REDIS] Inserted ${val} to ${key}`);
    //           cb();
    //         })
    //         .catch(err => {
    //           console.error(`[REDIS ERROR] Cannot insert ${val} to ${key}`);
    //           cb();
    //         });
    //     });
    //   } else {
    //     async.each(valueArr, (val, cb) => {
    //       const [k, v] = val;
    //       redisController.hashActions
    //         .set(key, k, v)
    //         .then(reply => {
    //           console.log(`[REDIS] Inserted ${k}:${v} into ${key}: `, reply);
    //           cb();
    //         })
    //         .catch(err => {
    //           console.error(`[REDIS ERROR] Cannot insert ${k}:${v} into ${key}: `, err);
    //         });
    //     });
    //   }
    // });
  }
};
