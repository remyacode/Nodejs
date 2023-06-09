const fs=require('fs');

const requestHandler=(req,res)=>{
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
};

//to export this to that app.js
module.exports = requestHandler;
/* DIFFERENT WAYS TO EXPORT
module.exports={
    handler:requestHandler;
    someText:'Some Hard Coded Text'
};
//
module.exports.handler=requestHandler;
module.export.someText='some hard coded text';
//
exports.handler=requestHandler;
export.someText='some hard coded text';
*/
