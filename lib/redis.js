/**
 * Created by hzliaoyanhua.
 */
'use strict';
let Redis = require('ioredis');
const config = require('../config');

var opts = config.redis || {};
var env = process.env;
var client = new Redis({
    host: opts.host || env.REDIS_HOST,
    port: opts.port || env.REDIS_PORT,
    password: opts.options.password || env.REDIS_PASSWORD,
    ttl: opts.ttl || env.REDIS_TTL
});
// var client = new Redis();

module.exports = client;
