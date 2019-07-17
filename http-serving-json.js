const http= require('http');
const https= require('https');
const fs= require('fs');

const url='http://jsonplaceholder.typicode.com/posts';

http.createServer((req,serverRes) => {
    if(req.method === 'GET' && req.url === '/posts'){
        http.get(url, (httpRes)=>{
            httpRes.on('data', data=> {
                httpRes.setEncoding('utf8');
                serverRes.write(data);
                //console.log(data);
            });
                    httpRes.on('end', () => {
                    console.log('its over');
            
            });
        });
    }  else {
        serverRes.writeHead(404, {'content-type: text/plain'});
        serverRes.end('404 ERROR, could not find what you were looking for');


    }
}).listen(4444);
console.log('server is listening')

