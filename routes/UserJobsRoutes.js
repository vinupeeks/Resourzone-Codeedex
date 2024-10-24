const express = require('express');
const router = express.Router();
const jobController = require('../controllers/AdminJobController.js');


router.get('/', jobController.getAllJobs);

router.get('/:id', jobController.getJob);

module.exports = router;