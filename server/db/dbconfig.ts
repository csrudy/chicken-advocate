import { config } from "dotenv";
import { resolve } from "path";
import { PoolConfig } from "pg";

config({ path: resolve(__dirname, "../../../.env") });

const dbconfig: PoolConfig = {
  user: process.env.db_user,
  host: process.env.db_host,
  password: process.env.db_password,
  database: process.env.db_database,
  port: parseInt(process.env.db_port),
  max: 1
};

if (Object.values(dbconfig).some(val => !val)) {
  throw Error("Missing information dbConfig, please check .env file");
}

export default dbconfig;
