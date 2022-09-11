require("dotenv").config();
//async errors
require('express-async-errors')
const express = require("express");
const app = express()
const connectDB = require('./db/connect')
const ProductsRoute = require('./routes/products')
const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
//middlewares
app.use(express.json())
//routes
app.use('/api/v1/products',ProductsRoute)
//products route
app.use(notFound)
app.use(errorMiddleware)

const start = ()=>{
    try{
        connectDB(process.env.MONGO_URI)
        app.listen(3000,console.log("Server is listening/.."))
    }catch(error){
        console.log(error)
    }       
}
start()