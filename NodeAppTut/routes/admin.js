const express=require('express');

const router=express.Router();
const path=require('path');

router.get('/add-product',(req, res, next)=>{
    //console.log('IN another middleware')
    //res.send('<form action="/admin/add-product" method ="POST">Name:<input type="text" name="title"><br>Size:<input type="text" name="size" ><br><button type="submit">Add Product</button></form>'); //text/html
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //res.send({'key1':'value'})//application/json
});
router.post('/add-product',(req, res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;