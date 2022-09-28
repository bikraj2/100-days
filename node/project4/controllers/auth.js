const User = require('../models/User');
const { StatusCpdes, StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors/index');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const token =jwt.sign(req.body.name, process.env.JWT_SECRET);
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ token: token });
};
const login = async (req, res) => {
  res.send('login user');
};

module.exports = {
  register,
  login,
};
