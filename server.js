const express = require("express")
const app = express()
const index = require("./routes/index")
const bodyParser = require("body-parser")

const port = process.env.port || 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/", index)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})