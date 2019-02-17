/**
 * Apache-like web server built with node
 */

 const http = require('http');

 const hostname = '127.0.0.1';  //localhost
 const port = 3300;

 const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Server is running live!');
 });

 server.listen(port, hostname, () => {
     console.log(`Server is running at http://${hostname}:${port}/`);
 });