import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import studentRoute from "./routes/studentRoute.js";
import courseRoute from "./routes/courseRoute.js";
import facultyRoute from "./routes/facultyRoute.js";



const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 4500;



//Our connection
mongoose.connect('mongodb://localhost:27017/CollegeManagement').then(()=>{
   console.log("db connect sucessfully");

   app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
   })
}).catch(error => console.log(error))


//for students
app.use("/api",studentRoute);

//for courses
app.use("/api",courseRoute);


//for faculty
app.use("/api",facultyRoute);


