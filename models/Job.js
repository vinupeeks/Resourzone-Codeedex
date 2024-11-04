const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    Name: { type: String, required: true, },
    reqId:{type: String, required: true,},
    country:{type: String, required: true,},
    location:{type: String, required: true,},
    Date:{type:String,required:true}
}, {
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
