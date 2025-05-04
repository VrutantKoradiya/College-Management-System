import mongoose from "mongoose";

const facultiySchema = new mongoose.Schema({
    fid:{
        type:Number,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    courseassignment:{
        type:String,
        required:true
    },
     techexperience:{
            type:String,
            required:true  
    }
    
})

export default mongoose.model("faculties",facultiySchema);