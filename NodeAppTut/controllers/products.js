const Product=require('../models/product')
const path = require('path');

exports.getAddProduct = (req, res, next) => {

    //res.sendFile(path.join(__dirname,'../','views','add-product.html')); //text/html

    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });

  }
exports.getProducts=(req, res, next) => {
   
    //const products=
    Product.fetchAll(products=>{
        //res.sendFile(path.join(__dirname,'../','views','shop.html')); //text/html
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '/shop',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });

    });
    
    
  }
exports.postAddProduct = (req, res, next) => {
    //products.push({ title: req.body.title });
    
    const product =new Product(req.body.title);
    product.save();

    res.redirect('/shop');
  }

  /*
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
  exports.getProducts=(req, res, next) => {
   
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/shop',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }
  exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/shop');
  }


  */
