var data = require('../data.json');
var dbconnect_1 = require('./db/dbconnect');
console.log(data.length);
var promises = [];
data.forEach(function (restaurant) {
    var name = restaurant.name, price = restaurant.price, image_url = restaurant.image_url;
    var _a = restaurant.location, address1 = _a.address1, address2 = _a.address2, city = _a.city, zip_code = _a.zip_code, country = _a.country, state = _a.state;
    var _b = restaurant.coordinates, longitude = _b.longitude, latitude = _b.latitude;
    var restaurantQuery = {
        name: 'resturantAdd',
        text: "INSERT into restaurants (name, longitude, latitude, price, address1, address2, city, zip_code, country, state, image_url) \n  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);",
        values: [name, longitude, latitude, price, address1, address2, city, zip_code, country, state, image_url]
    };
    promises.push(new Promise(function (resolve, reject) {
        dbconnect_1["default"].query(restaurantQuery, function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    }));
});
Promise.all(promises)
    .then(function (query) {
})
    .catch(function (err) { return console.log(err); });
