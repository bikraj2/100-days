const express = require('express')

const router = express.Router()

const {getAllProductsSatic,getAllProducts}=require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsSatic)


module.exports = router