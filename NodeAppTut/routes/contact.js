const express=require('express');

const router=express.Router();

const path=require('path')

router.get('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.sendFile(path.join(__dirname,'../','views','contact.html')); //text/html
    //res.send({'key1':'value'})//application/json
});

router.post('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.sendFile(path.join(__dirname,'../','views','success.html')); //text/html
    //res.send({'key1':'value'})//application/json
});


module.exports=router;