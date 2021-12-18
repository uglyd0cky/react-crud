const db = require("./database/db")
const con = new db()

module.exports = function(app) {

    app.route('/products')

        .get((req,res)=>{
            con.selectAll(res)
        })
        .post((req,res)=>{
            console.log("post product!")
            con.insert(req.body)
        })
        .put((req,res)=>{
            console.log("put product!")
            con.update(req.body)
        })
        .delete((req,res)=>{
            console.log("delete product!")
            con.delete(req.body)
        }) 
}

