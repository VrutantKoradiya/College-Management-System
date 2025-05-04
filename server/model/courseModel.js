import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    code:{
        type:Number,
        required:true
    },
    cname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    }
    
})

export default mongoose.model("courses",courseSchema);

