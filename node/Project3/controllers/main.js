const login = async (req,res)=>{
    const CustomApiError = require('../errors/custom-error ')
    const {username,password} = req.body

    //error

    if(!username || !password){
        throw new CustomApiError("Please provide both the username and the password",400)
    }
    console.log(username,password)
    res.send('Fake login sign in or sign up')
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*1000)
    res.status(200).json({ msg: "Hello john",secret:`here is your lucky number ${luckyNumber}`})
}


module.exports = {login,dashboard}