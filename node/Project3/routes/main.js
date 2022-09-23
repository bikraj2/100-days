const  express = require('express')

const  authMiddleWare= require('../middleware/auth');
const router = express.Router()


const {login,dashboard} =   require('../controllers/main')

router.route('/dashboard').get(authMiddleWare,dashboard)
router.route('/login').post(login)

module.exports=router

