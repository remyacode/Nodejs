
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //Magic Association
  req.user.createProduct({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    })/*
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    //userId: req.user.id
  }
  )  */
  .then((result)=>{

  console.log('Created Product');
  res.redirect('/admin/products')
    })
  .catch(err=>{console.log(err);})
  /*
  const product = new Product(null,title, imageUrl, description, price);
  product
  .save()
  .then(()=>{
    res.redirect('/');
  })
  .catch(err=>{console.log(err);})
  */
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts({where:{id:prodId}})
  //Product.findByPk(prodId)
  .then( products => {
    const product=products[0];
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err=>{console.log(err);})
};

exports.postEditProduct=(req,res,next)=>{

  const prodId = req.body.productId;
  const updateTitle=req.body.title;
  const updateImageUrl = req.body.imageUrl;
  const updatePrice=req.body.price;

  const updateDesc=req.body.description;
  
  Product.findByPk(prodId)
  .then(product => {
    product.title = updateTitle;
    product.price=updatePrice;
    product.description=updateDesc;
    product.imageUrl=updateImageUrl;
    return product.save();
})
  .then(result=>{
    console.log('UPDATED PRODUCT')
    res.redirect('/admin/products')
  })
  .catch(err=>console.log(err))
  /*
  const updateProduct=new Product(
    prodId,
    updateTitle,
    updateImageUrl,
    updateDesc,
    updatePrice);

  updateProduct.save();
  */


  

}

exports.getProducts = (req, res, next) => {
  
  /*
  Product.fetchAll()
  .then(([rows,fielddata])=>{
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>console.log(err));
  */
  req.user.getProducts()
  //Product.findAll()
  .then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=> {
    console.log(err)
  });
};

exports.postDeleteProduct = (req,res,next)=>{
  const prodId = req.body.productId;
  //Product.destroy(condition prodId)
  Product.findByPk(prodId)
  .then(product=>{
    return product.destroy();
  })
  .then(result=>{
    console.log('DESTROYED PRODUCT')
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err))
 
}

