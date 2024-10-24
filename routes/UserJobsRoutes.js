const express = require('express');
const router = express.Router();
const jobController = require('../controllers/AdminJobController.js');


router.get('/jobs', jobController.getAllJobs);

router.get('/jobs/:id', jobController.getJob);

module.exports = router;