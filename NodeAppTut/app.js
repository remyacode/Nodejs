/*
//task
const http = require('http');


const server = http.createServer((req,res)=>{
    console.log(req);
});

server.listen(3000);
*/
//DELIVERABLE

const http=require('http');


const server = http.createServer((req,res)=>{
    //console.log('Remya C');
    if(req.url=='/home'){
        //console.log(req.url,req.method,req.header)
        //console.log(req.url);
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Home</title></head><body><h1>Welcome Home</h1></body></html>');
        res.end();
    }
    
    if(req.url=='/about'){
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>About</title></head><body><h1>Welcome to About us page</h1></body></html>');
        res.end();
    }
    if(req.url=='/node'){
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>About</title></head><body><h1>Welcome to Node js Project</h1></body></html>');
        res.end();
    }
    
});

server.listen(4001);