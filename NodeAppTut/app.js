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
const express=require('express');
const bodyParser=require('body-parser');

const adminroutes=require('./routes/admin.js')
const shoproutes=require('./routes/shop.js');
const contactroutes=require('./routes/contact.js');

const app=express();
const path=require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use-to add a new middleware function-app.use
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


//order matters
app.use('/admin',adminroutes);
app.use('/shop',shoproutes);
app.use('/contactus',contactroutes);

//404 error
const errcont= require('./controllers/error.js')
app.use(errcont.get404);

/*MOVED TO admin.js
app.use('/add-product',(req, res, next)=>{
    //console.log('IN another middleware')
    res.send('<form action="/product" method ="POST">Name:<input type="text" name="title"><br>Size:<input type="text" name="size" ><br><button type="submit">Add Product</button></form>'); //text/html
    //res.send({'key1':'value'})//application/json
});
app.post('/product',(req, res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
*/

/*MOVED TO shop.js
app.use('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.send('<h1>Hellooo</h1>'); //text/html
    //res.send({'key1':'value'})//application/json
});

*/
//const routes=require('/home/remya-c/Desktop/Sharpener Tasks/Node.js/NodeAppTut/route.js');
/*
const server = http.createServer(app);


server.listen(4001);
//ORRRR
*/

app.listen(4001);
//const server = http.createServer(routes);
//const server = http.createServer(routes.handler);
//console.log('Remya C');


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
    
