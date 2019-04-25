import client from "../../db/redisConnect";
import { Request, Response, NextFunction } from "express";
import { setActions, IRedisSetActions } from "./setActions";
import { hashActions, IRedisHashActions } from "./hashActions";

// redis to cache top 10 restaurants;
// redis to cache restaurant info
// redis to cache zip info
// redis to cache list of restaurants as a array of string

/*

for restaurants: hashmap: key: restaurant._id, value = {}
for top 10: hashmap: key: _id, value  = {}

for zipcode: set: zipcode values: zipcodes // for trie
for restaurant names: set: restaurant_names values: names


*/

interface IRedisController {
  hashActions: IRedisHashActions;
  setActions: IRedisSetActions;
}

export const redisController: IRedisController = {
  setActions,
  hashActions
};

client.on("error", err => {
  console.error("[REDIS] [ERROR]:", err);
});

// client.get(`wikipedia:${query}`, (err, result) => {
//   // If that key exist in Redis store
//   if (result) {
//     const resultJSON = JSON.parse(result);
//     return res.status(200).json(resultJSON);
//   } else { // Key does not exist in Redis store
//     // Fetch directly from Wikipedia API
//     return axios.get(searchUrl)
//       .then(response => {
//         const responseJSON = response.data;
//         // Save the Wikipedia API response in Redis store
//         client.setex(`wikipedia:${query}`, 3600, JSON.stringify({ source: 'Redis Cache', ...responseJSON, }));
//         // Send JSON response to client
//         return res.status(200).json({ source: 'Wikipedia API', ...responseJSON, });
//       })
//       .catch(err => {
//         return res.json(err);
//       });

//     }
//   })

export default redisController;
