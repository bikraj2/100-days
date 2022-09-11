const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsSatic = async (req, res) => {
  const product = await Product.find({}, { name: true, price: true })
    .limit(10)
    .skip(5);
  res.status(200).json(product);
};
const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<": "$lte",
      "=": "$eq",
    };
    const regEx = /\b(<|>|<=|>=|=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price','rating'];
    filters =filters.split(',').forEach ((item)=>{
      const [field,operator,value] = item.split('-')
      if(options.includes (field)){
        queryObject[field]={[operator]:Number(value)}
      }
    })

    console.log(queryObject);
  }
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sort);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const product = await result;
  res.status(200).json({ product });
};
module.exports = { getAllProducts, getAllProductsSatic };