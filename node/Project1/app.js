const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware =require("./middleware/error_handler")
require('dotenv').config()
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/hello',(req,res)=>{
    res.send("Task manager APp")
})
app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Serve is listening on ${port} ...`))
        
    }catch (error){
        console.log(error)
    }
}
///nothing just something

start()

