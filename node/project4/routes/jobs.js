const express = require('express');

const router = express.Router();

const {createjobs,getjobs,getjob,updatejobs,deletejobs}= require('../controllers/jobs')

router.route('/').post(createjobs).get(getjobs)
router.route('/:id').get(getjob).delete(deletejobs).patch(updatejobs)

module.exports = router