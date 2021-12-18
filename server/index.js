const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
require('./routes')(app)


app.listen(3001, ()=> {
    console.log('server ok')
})