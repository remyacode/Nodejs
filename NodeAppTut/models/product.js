const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(require.main.path),'data','products.json');

const getProductsFRomFile=cb=>{

    fs.readFile(p,(err, filecontent)=>{
        if(err){
            return cb([]);
        }
        else{
        cb(JSON.parse(filecontent));}
    })
    //return products;
}

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save() {
        getProductsFRomFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err)
            });
        });
        //const p=path.join(path.dirname(require.main.path),'data','products.json');
        //fs.readFile(p, (err,filecontent)=>{
          /*  let products=[]
            if(!err){
                products=JSON.parse(filecontent)
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err)
            }); */
        //});
    }

    static fetchAll(cb) {
        getProductsFRomFile(cb);
        /*
        const p=path.join(path.dirname(require.main.path),'data','products.json');

        fs.readFile(p,(err, filecontent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(filecontent));
        })
        //return products;
        */
    }
}