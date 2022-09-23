const CustomApiError = require('../errors/custom-error')
const jwt = require("jsonwebtoken")
const { UnAuthenitcatedError } = require('../errors')

const authenticationMiddleWare = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer'))
    {
        throw new UnAuthenitcatedError("no token sent")
    }
    try{
        const val = jwt.verify(authHeader.split(' ')[1],process.env.SECRET)
        const{_id,username} = val;
        req.username = username
        next()
    }catch(error){
        throw new UnAuthenitcatedError("not authorized to access this route")
    }
    
}

module.exports = authenticationMiddleWare