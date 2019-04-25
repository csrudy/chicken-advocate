import { config } from "dotenv";
import { resolve } from "path";
import { ClientOpts } from "redis";

config({ path: resolve(__dirname, "../../.env") });

console.log(process.env);
const redisConfig: ClientOpts = {
  host: process.env.redis_host,
  password: process.env.db_password,
  port: parseInt(process.env.redis_port)
};

export default redisConfig;
