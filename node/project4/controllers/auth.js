const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors/index');
require('dotenv').config();
const jwt = require('jsonwebtoken');


// register 
const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJwt()
  res.status(StatusCodes.CREATED).json({ token: token });
};

const login = async (req, res) => {
  const {email,password} =req.body;

  //check if the email and password field are empty
  if(!email||!password){
    throw new BadRequestError("Please provide email and password.")
  }
  const user= await User.findOne({email})
    //if the user exists
    if(!user){
      throw new UnauthenticatedError("No user found.")
    }
    const isMatch = await user.comparePassword(password)
    //if the password matches
    if(!isMatch){
      throw new UnauthenticatedError("Invalid credentials")
    }
    const token = user.createJwt();
    res.status(StatusCodes.OK).json({user:user.name,token:token})
};

module.exports = {
  register,
  login,
};
