import express from "express";
import { createstudent, removeStudent, getAllstudent, getOnestudent, updateStudent } from "../controller/studentController.js";

const studentRoute = express.Router();

studentRoute.post("/createstudent",createstudent);
studentRoute.get("/findstudent",getAllstudent);
studentRoute.get("/findonestudent/:id",getOnestudent);
studentRoute.put("/updatestudent/:id",updateStudent);
studentRoute.delete("/removestudent/:id",removeStudent);





export default studentRoute;