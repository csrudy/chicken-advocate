var pg_1 = require('pg');
var dbconfig_1 = require('./dbconfig');
var pool = new pg_1.Pool(dbconfig_1["default"]);
exports["default"] = pool;
