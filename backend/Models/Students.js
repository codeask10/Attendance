const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    blood_group: {
        type:String,
    },
    contact_number: {
        type:String,
        unique: true
    }
});

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;