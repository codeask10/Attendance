const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURL=process.env.REACT_APP_MONGOURL;
 const connectToMongoose=async()=>{
    
 await mongoose.connect(
    mongoURL
  )
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));
 }
module.exports=connectToMongoose;