//get redis!
var Redis = require('ioredis'); //new Redis API package
var redis = new Redis({
    "port": "127.0.0.1",
    "port": 6379
});

redis.set('foo', 'bar', function(err, reply){
    console.log(err, reply);
});

redis.get('foo', function(err, result){
    console.log(err, result);
});