const CustomApiError = require('../errors/custom-error')
require("dotenv").config()
const jwt = require("jsonwebtoken")
const { BadRequest } = require('../errors')
const login = async (req,res)=>{
    const {username,password} = req.body
    //error
    if(!username || !password){

        throw new BadRequest("Please provide both the username and the password")
    }
    const _id = new Date().getDate()
    const token = jwt.sign({_id,username},process.env.SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res)=>{

    const luckyNumber = Math.floor(Math.random()*1000)
    res.status(200).json({ msg: `Hello ${req.username}`,secret:`here is your lucky number ${luckyNumber}`}) 
    
}


module.exports = {login,dashboard}