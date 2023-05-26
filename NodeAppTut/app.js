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

const fs=require('fs');
const server = http.createServer((req,res)=>{
    //console.log('Remya C');
    if(req.url==='/'){
        //res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST">');
        res.write(fs.readFileSync('message.txt'))
        res.write('<br><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if(req.url==="/message" && req.method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                //res.write(fs.readFile('message.txt'))
                return res.end();
            });
           
        });
        
        
    }
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>MYfirst Page</title></head><body><h1>Hi from Nodejs</h1></body></html>');
         res.end();
    /*
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
    */
    
});

server.listen(4001);