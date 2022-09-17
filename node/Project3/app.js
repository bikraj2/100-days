require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//routes

const router = require('./routes/main')
var bodyParser = require('body-parser')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/v1',router)
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
