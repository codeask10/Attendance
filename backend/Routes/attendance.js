const express = require('express');
const router = express.Router();
const moment = require('moment');
const AttendanceModel=require('../Models/Attendance');

router.post('/attendance', async(req, res) => {
    try {
        const attendanceData = req.body.attendanceData;

    //const date = new Date().setHours(0, 0, 0, 0); // Get the current date with time set to midnight
    const currentDate = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-IN',options);
    // const parts = formattedDate.split('/'); // Split the string by "/"
    // const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
   console.log(formattedDate)
    // Create attendance records for each student
    const attendanceRecords = attendanceData.map(data => ({
        studentId: data.studentId,
        attendance: data.attendance
    }));
    const attendance = new AttendanceModel({
        formattedDate, attendanceRecords 
    })
    // saving the records;
    const saveAttendanceRecoord= await attendance.save();
    res.status(200).send('Attendance recorded successfully');
    } catch (error) {
        console.error('Error recording attendance:', error);
        res.status(500).send('Error recording attendance');
    }
});


module.exports = router; 