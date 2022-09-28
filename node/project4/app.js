require('dotenv').config();
require('express-async-errors');

const bodyParser = require('body-parser')


const express = require('express');
const app = express();

const connectDB = require('./db/connect')


const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jons',jobRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
