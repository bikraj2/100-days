const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const user = new mongoose.Schema({
  name: {
    type: String,
    rquired: [true, 'Please provide a name. '],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    rquired: [true, 'Please provide a email. '],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email. ',
    ],
    unique: true,
  },
  password: {
    type: String,
    rquired: [true, 'Please provide a name. '],
    minlength: 8,
  },
});

user.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

user.methods.createJwt = function () {
  return jwt.sign(
    {
      userId: this._id,
      name: this.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

user.methods.comparePassword = async function (pass) {
  const isMatch = await bcrypt.compare(pass, this.password);
  return isMatch;
};
module.exports = mongoose.model('USER', user);
