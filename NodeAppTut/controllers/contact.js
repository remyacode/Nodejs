const path=require('path');

exports.getcontact = (req, res, next)=>{
    //console.log('IN another middleware')
    res.sendFile(path.join(__dirname,'../','views','contact.html')); //text/html
    //res.send({'key1':'value'})//application/json
};

exports.putcontact = (req, res, next)=>{
    //console.log('IN another middleware')
    res.sendFile(path.join(__dirname,'../','views','success.html')); //text/html
    //res.send({'key1':'value'})//application/json
};