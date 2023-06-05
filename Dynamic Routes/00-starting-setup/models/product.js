const Sequelize=require('sequelize');

const sequelize=require('../util/database')

const Product = sequelize.define('product',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNUll: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNUll: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNUll: false
  },
  description: {
    type: Sequelize.STRING,
    allowNUll:false
  }
})

module.exports=Product;

/*BEFORE SEQUELIZE
//FOR FILE
const fs = require('fs');
const path = require('path');

//DB

const db= require('../util/database')
const Cart=require('./cart')


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

//FOR FILE

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
//FILE

    getProductsFromFile(products => {
      if(this.id){
        const existingProductIndex = products.findIndex(prod =>prod.id===this.id);
        const updatedProducts=[...products];
      updatedProducts[existingProductIndex]=this;
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
      });  
    }else{
      this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      })}
    })
  
   //FOR DB

   return db.execute('INSERT INTO products (title,price,imageUrl,description) VALUES(?,?,?,?)',
   [this.title,this.price,this.imageUrl,this.description])


  }

static deleteById(id){
  //FILE
  getProductsFromFile(products=>{
    const product =products.find(prod=>prod.id===id)
    const updatedProducts=products.filter(prod=>prod.id !== id);
    fs.writeFile(p, JSON.stringify(updatedProducts),err=>
    {
      if(!err){
        Cart.deleteProduct(id,product.price);
      }
    }
    )
  })
 //FOR DB

 return db.execute('DELETE FROM products WHERE products.id=?',[id])


}

  static fetchAll() {
    //FOR FILE
    getProductsFromFile(cb);
    
   //FOR DB
   return db.execute('SELECT * FROM products')
   
  }

  static findbyId(id){
    //FILE
    getProductsFromFile(products=>{
      const product=products.find(p=>p.id===id);
      
      cb(product);
    })
  
  
  //FOR DB
  return db.execute('SELECT * FROM products WHERE products.id=?',[id])

  }
};
*/