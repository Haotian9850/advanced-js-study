//get redis!
var Redis = require('ioredis'); //new Redis API package
var redis = new Redis({
    "port": "127.0.0.1",
    "port": 6379
});

//insert through callback function
redis.set('foo', 'bar', function(err, reply){
    console.log(err, reply);
});

//read through callback function
redis.get('foo', function(err, result){
    console.log(err, result);
});