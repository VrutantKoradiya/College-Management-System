import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    sid:{
        type:Number,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    }
    
})

export default mongoose.model("students",studentSchema);