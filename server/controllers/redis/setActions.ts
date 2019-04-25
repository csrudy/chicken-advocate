import client from "../../db/redisConnect";

export interface IRedisSetActions {
  isMember: (key: string, value: string) => Promise<number>;
  set: (key: string, value: string) => Promise<number>;
  invalidate: (key: string, value: string) => Promise<number>;
  getAll: (key: string) => Promise<string[]>;
}

export const setActions: IRedisSetActions = {
  set: (key, value) => {
    return new Promise((resolve, reject) => {
      client.sadd(key, value, (err, num) => {
        if (err) {
          console.error(`[REDIS] Error adding ${value} to ${key}. `, err);
          reject(err);
        }
        resolve(num);
      });
    });
  },
  isMember: (key, value) => {
    return new Promise((resolve, reject) => {
      client.sismember(key, value, (err, reply) => {
        if (err) {
          console.error(`[REDIS] Error running sismember to look up ${key} in ${value}. `, err);
          reject(err);
        }
        resolve(reply);
      });
    });
  },
  getAll: key => {
    return new Promise((resolve, reject) => {
      console.log(`[REDIS] Retrieving set data from ${key}`);
      client.smembers(key, (err, reply) => {
        if (err) {
          console.error(`[REDIS] Error getting all values in ${key}. `, err);
          reject(err);
        }
        if (!reply.length) {
          console.error(`[REDIS] ${key} does not exist in cache.`);
          reject();
        }
        resolve(reply);
      });
    });
  },

  invalidate: (key, value) => {
    return new Promise((resolve, reject) => {
      client.srem(key, value, (err, reply) => {
        if (err) {
          console.error(`[REDIS] Error deleting ${value} from the set ${key}`);
          reject(err);
        }
        resolve(reply);
      });
    });
  }
};
