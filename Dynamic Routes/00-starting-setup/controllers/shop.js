const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  /*
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
  */
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/products'
    });
  })
  .catch(err=> {
    console.log(err)
  });
/*
  Product.fetchAll()
  .then(([rows,fielddata])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All products',
      path: '/products'
    });
  })
  .catch(err=>console.log(err));
 */
};

exports.getProduct = (req,res,next)=>{
  const prodId = req.params.productId;
  /*FILE
  Product.findbyId(prodId,product=>{
    res.render('shop/product-detail',{product: product,pageTitle: product.title,path: '/products'});
  })
  //res.redirect('/');
  */
 //DB
  Product.findAll({where:{id:prodId}})
  .then(products=>{

     res.render('shop/product-detail',{
      product: products[0],
      pageTitle: products[0].title,
      path: '/products'});
  })
  .catch(err=>console.log(err));
 //OR
 /*
  Product.findByPk(prodId)
  .then((product)=>{
    //console.log(product)
    res.render('shop/product-detail',{
      product: product,
      pageTitle: product.title,
      path: '/products'});
  })
  .catch(err=>console.log(err));
  */
}

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=> {
    console.log(err)
  });
  /*
  Product.fetchAll()
  .then(([rows,fielddata])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>console.log(err));
  */
 
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart=>{
    Product.findAll()
    .then(products=>{
      const cartProducts =[];
      for(product of products){
        if(cart.products.find(prod=>prod.id===product.id)){
            cartProducts.push({productData})
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
      });
    })
 
  })

};

exports.postCart = (req,res,next)=>{
  const prodId = req.body.productId;
  Product.findbyId(prodId,(product)=>{
    Cart.addProduct(prodId,product.price);
  })
  res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
