const express = require('express');
const router = express.Router();
const jobController = require('../controllers/AdminJobController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');


router.post('/add', protect, admin, jobController.addJob);

router.get('/jobs', protect, admin, jobController.getAllJobs);

router.get('/jobs/:id', protect, admin, jobController.getJob);

router.put('/jobs/:id', protect, admin, jobController.editJob);

router.delete('/jobs/:id', protect, admin, jobController.deleteJob);


module.exports = router;
