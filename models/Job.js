const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    jobMode: { type: String, enum: ['parttime', 'remote', 'hybrid', 'fulltime'], required: true, },
    salary: { type: Number, required: true, },
    description: { type: String, required: true, },
    companyName: { type: String, required: true, },
}, {
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
