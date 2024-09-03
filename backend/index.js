const express = require('express');
const database=require('./Database');
const cors=require('cors');
const dotenv = require('dotenv');
const StudentSchema=require('./Models/Students');
const StudentJsonData=require('./Student.json');
dotenv.config();

const port=5003;

const app=express();
app.use(express.json());
app.use(cors());

database();
const addMockData = async () => {
    try {
        const studentData = await StudentSchema.find({});
        if(!studentData){
        // Remove existing data from the collection
          await StudentSchema.deleteMany();
          // Insert mock data into the collection
          await StudentSchema.insertMany(StudentJsonData);
        }
      } catch (error) {
        console.error('Error populating database:', error);   
      }
    };

app.use("/api", require("./Routes/attendance"));

app.listen(port,()=>{
    console.log(`Vehicle Management System backend listening on Port http://localhost:${port}`)
});

addMockData();