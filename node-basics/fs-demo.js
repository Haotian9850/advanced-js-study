/**
 * node自带库fs demo
 */

 const fs = require('fs');

 exports.getData = function(path, callback){
     fs.exists(path, stateCallback);
     function stateCallback(exists){
         if(!exists){
             return callback("Path is not found!");
         }
         const stream = fs.createReadStream(path);
         let data = '';
         stream.on('data', function(chunk){
             data += chunk;
         });
         stream.on('end', function(){
             callback(false, data);
         });
     }
 };