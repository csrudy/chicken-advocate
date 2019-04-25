import { config } from "dotenv";
import { resolve } from "path";
import { ClientOpts } from "redis";

config({ path: resolve(__dirname, "../../.env") });

const redisConfig: ClientOpts = {
  host: process.env.redis_host,
  port: parseInt(process.env.redis_port),
  password: process.env.redis_password
};

export default redisConfig;
