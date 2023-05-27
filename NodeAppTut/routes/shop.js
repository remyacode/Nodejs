const express=require('express');

const router=express.Router();

router.get('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.send('<h1>Hellooo</h1>'); //text/html
    //res.send({'key1':'value'})//application/json
});


module.exports=router;