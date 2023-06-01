const path = require('path');

const express = require('express');

const productsController=require('../controllers/products')

const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/', productsController.postAddProduct);

module.exports = router;


/*
const express=require('express');

const router=express.Router();

const path=require('path')

router.get('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.sendFile(path.join(__dirname,'../','views','shop.html')); //text/html
    //res.send({'key1':'value'})//application/json
});
router.post('/',(req, res, next)=>{
    //console.log('IN another middleware')
    res.redirect('/shop'); //text/html
    //res.send({'key1':'value'})//application/json
});


module.exports=router;
*/