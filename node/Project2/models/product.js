const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please make sure to enter the name of the product"],
  },
  price: {
    type: Number,
    require: [true, "Please make sure to enter the price of the product"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    defualt: Date.now(),
  },
  company: {
    type: String,
    enum:{
        values:["ikea", "liddy", "caressa", "marcos"],
        message:'{VALUE} is not supported'
    }
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model('Product', productSchema)