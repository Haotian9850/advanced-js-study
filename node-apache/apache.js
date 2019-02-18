/*
*  Use streams with pipe to finally simulate a HTTP server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3300;
const imageDir = __dirname + '/images';

const server = http.createServer((req, res) => {
    const url = req.url;
    const __path = path.join(imageDir, url);

    fs.exists(__path, function(exists){
        if(exists){
            res.statusCode = 200;
            res.setHeader('Content-Type', `image/${path.extname(url).replace('.', '')}`);
            fs.createReadStream(__path).pipe(res);  //pass to res!
        }else{
            res.statusCode = 404;
            res.end('Not found!');
        }
    });
});

//start server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

