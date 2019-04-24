import client from '../db/redisConnect'
import { Request, Response, NextFunction } from 'express';

interface IRedisController {
  checkCache: (req: Request, res: Response, next: NextFunction) => void;
}
const redisController: IRedisController = {
  checkCache: (res, req, next) => {


  }
}



client.on('error', function (err) {
  console.log('Error: ', err)
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