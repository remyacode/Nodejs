const express=require('express');

const router=express.Router();

const path=require('path')

const contcont = require('../controllers/contact')

router.get('/',contcont.getcontact);

router.post('/',contcont.putcontact);


module.exports=router;