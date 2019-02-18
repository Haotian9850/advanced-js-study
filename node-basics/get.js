const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3300;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const query = url.parse(req.url, true).query;   //parse query
    console.log(query);
    res.setHeader('Content-Type', 'text/plain');
    res.end(`GET post from ${query['source']} \n`);
});

//start server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})