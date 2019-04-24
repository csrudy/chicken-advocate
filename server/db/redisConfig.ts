import {config} from 'dotenv';
import {resolve} from 'path';

config({path: resolve(__dirname, '../../.env')});

interface RedisConfig {
  host: string;
  password: string;
  port: string;
  max?: number
}
console.log(process.env)
const redisConfig: RedisConfig = {
  host: process.env.redis_host,
  password: process.env.db_password,
  port: process.env.redis_port,
}

export default redisConfig;