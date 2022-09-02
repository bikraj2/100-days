const  getAllProductsSatic = async(req,res)=>{
    res.status(200).json({msg:'Producst test'})
}
const  getAllProducts = async(req,res)=>{
    res.status(200).json({msg:'Producst test route'})
}

module.exports = {getAllProducts,getAllProductsSatic}