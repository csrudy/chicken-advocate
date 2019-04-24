import { Request, Response, NextFunction } from "express";
import { ISearchFilter } from "./dbController";
import { dbReader } from "./";
import pool from "../db/dbconnect";

export const readController = {
  getData: (req: Request, res: Response, next: NextFunction) => {
    const { offset, zip_code, name, count } = req.params;
    const filter: ISearchFilter = {
      offset,
      zip_code,
      name,
      count
    };
    dbReader
      .Get(filter)
      .then(dbres => {
        // console.log(res.rows);
        const restaurantId: string[] = [];
        dbres.rows.forEach(restaurant => {
          restaurantId.push(restaurant._id);
        });
        // helper(restaurantId);
      })
      .catch(err => console.error("[ERROR] DB retrieval failed:", err));
  },
  getTopTen: (req: Request, res: Response, next: NextFunction) => {
    dbReader
      .GetTopTen()
      .then(dbres => {
        console.log(dbres);
        res.send(dbres.rows);
      })
      .catch(err => {
        console.error("[ERROR] DB retrieval failed:", err);
      });
  }
};

// crunch, spice, flavor, temp, size
function helper(idArr) {
  const ratingsArr = [];
  const numberOfRatings = 20; // Math.floor(Math.random() * 45) || 1;
  for (let i = 0; i < numberOfRatings; i += 1) {
    const min = 9;
    const crunch = Math.floor(Math.random() * (11 - min) + min);
    const spice = Math.floor(Math.random() * (11 - min) + min);
    const flavor = Math.floor(Math.random() * (11 - min) + min);
    const temp = Math.floor(Math.random() * (11 - min) + min);
    const size = Math.floor(Math.random() * (11 - min) + min);
    const sqlQuery = {
      name: "ratingsQuery",
      text: `INSERT INTO ratings (restaurant_id, crunch, spice, flavor, temp, size) VALUES ($1, $2, $3, $4, $5, $6)`,
      values: [73, crunch, spice, flavor, temp, size]
    };
    ratingsArr.push(
      new Promise((resolve, reject) => {
        pool.query(sqlQuery, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      })
    );
  }
  console.log("ratings array length", ratingsArr.length);

  Promise.all(ratingsArr)
    .then(res => {
      console.log("on successful insert", res);
    })
    .catch(err => {
      console.log("on failure to insert", err);
    });
}
