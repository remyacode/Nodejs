const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//const db = require('./util/database')
const sequelize = require('./util/database')
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/* SQL Test

db.execute('SELECT * FROM products')
.then( result =>{
    console.log(result[0],result[1]);
})
.catch(err=>{
    console.log(err);
});
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


//ASSOCIATION
Product.belongsTo(User,{constraints: true, onDelete: 'CASCADE'})
//OR or AND
User.hasMany(Product);

sequelize
    .sync()
    .then(result=>{

        ///CREATE USER FOR AUTH
        return User.findByPk(1);

    })
    .then(user =>{
        if(!user){
            return User.create({name:'Max',email:'test@test.com'})
        }
        return user;
    })
    .then(user=>{
        //console.log(user);

        console.log('go ahead!');
        app.listen(8000);
    })
    .catch(err=>{
        console.log(err);
    })


