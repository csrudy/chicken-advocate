import client from "../../db/redisConnect";

export interface IRedisHashActions {
  exists: (table: string, key: string) => Promise<boolean>;
  get: (table: string, key: string) => Promise<string[]>;
  invalidate: (key: string) => Promise<number>;
  set: (table: string, key: string, value: any) => Promise<string>;
}

export const hashActions: IRedisHashActions = {
  exists: key => {
    return new Promise((resolve, reject) => {
      client.exists(key, (err, num) => {
        if (err) {
          console.error(`[REDIS] Error checking ${key}`);
          reject(err);
        }
        if (!num) {
          resolve(false);
        }
        resolve(true);
      });
    });
  },

  get: (table, key) => {
    return new Promise((resolve, reject) => {
      client.hmget(table, key, (err, reply) => {
        if (err) {
          console.error(`[REDIS] Could not get value from ${key} in cache. Error: `, err);
          reject(err);
        }
        resolve(reply);
      });
    });
  },

  invalidate: key => {
    return new Promise((resolve, reject) => {
      client.del(key, (err, n) => {
        if (err) {
          console.error("[REDIS] Error deleted keys");
          reject(err);
        }
        if (!n) {
          console.error(`[REDIS] Error deleting key: ${key}`);
          reject(n);
        }
        resolve(n);
      });
    });
  },

  set: (table, key, value) => {
    return new Promise((resolve, reject) => {
      client.hmset(table, key, value, (err, reply) => {
        if (err) {
          console.error(`[REDIS] Error setting key: ${key} value: ${value} in ${table}`);
          reject(err);
        }
        resolve(reply);
      });
    });
  }
};
