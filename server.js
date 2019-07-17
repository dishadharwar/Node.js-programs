const http= require('http');

const server = http.createServer((req,res) => {

res.writeHead(200, {'Content-Type':'text/plain'});

res.end('<h1>Hi guys, this is Disha here</h1>');

});

server.listen(3000);

console.log('Our server is running');
