/*
import * as data from "../data.json";
import pool from "./db/dbconnect";
import { resolve } from "dns";
let promises = [];
data.forEach(restaurant => {
  const { name, price, image_url } = restaurant;
  const { address1, address2, city, zip_code, country, state } = restaurant.location;
  const { longitude, latitude } = restaurant.coordinates;
  let restaurantQuery = {
    name: "resturantAdd",
    text: `INSERT into restaurants (name, longitude, latitude, price, address1, address2, city, zip_code, country, state, image_url) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
    values: [
      name,
      longitude,
      latitude,
      price,
      address1,
      address2,
      city,
      zip_code,
      country,
      state,
      image_url
    ]
  };

  promises.push(
    new Promise((resolve, reject) => {
      pool.query(restaurantQuery, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    })
  );
});

// Promise.all(promises)
//   .then(query => {
//   })
//   .catch(err=>console.log(err))

pool
  .query("SELECT 1 FROM restaurants where _id = 80;")
  .then(results => results.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
*/
