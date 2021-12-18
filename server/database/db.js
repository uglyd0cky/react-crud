const mysql = require("mysql")
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudstore"
})

class Database {
    constructor() {
        //
    }

    insert(product){
        let sql="INSERT INTO products (name,price,category) VALUES(?,?,?)"

        db.query(sql,[product.name, product.price, product.category],(err,res)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
            }
        })
    }

    selectAll(res){
        let sql = "SELECT * FROM products"
        db.query(sql,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        })
    }

    update(product){
        let sql = "UPDATE products SET name=?, price=?,category=? WHERE idproducts=?"
        db.query(sql, [product.name, product.price, product.category, product.id],(err,res)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
            }
         })
    }
    delete(product){
        let sql = "DELETE FROM products WHERE idproducts=?"
        db.query(sql,[product.id],(err,res)=>{
            if(err) {
                console.log(err)
            }
            else {
                console.log(res)
            }
        })
    }
}

module.exports = Database