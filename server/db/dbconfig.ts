
import {config} from 'dotenv';
import {resolve} from 'path';

config({path: resolve(__dirname, '../../.env')});

interface DbConfig {
  user: string;
  host: string;
  password: string;
  database: string;
  port: string;
  max?: number
}
console.log(process.env)
const dbconfig: DbConfig = {
  user: process.env.db_user,
  host: process.env.db_host,
  password: process.env.db_password,
  database: process.env.db_database,
  port: process.env.db_port,
}

export default dbconfig;