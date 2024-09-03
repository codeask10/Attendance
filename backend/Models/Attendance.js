const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    unique: true
  },
  attendanceRecords: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students',
        required: true
      },
      attendance: {
        type: String,
        enum: ['present', 'absent'],
        required: true
      }
    }
  ],
});

// Create the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;