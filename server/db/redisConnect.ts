import * as redis from 'redis';
import redisConfigOptions from './redisConfig'

const client = redis.createClient(redisConfigOptions);

export default client;