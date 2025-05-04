import express from "express";
import { createfaculty, removefaculty, getAllfaculty, getOnefaculty, updatefaculty } from "../controller/facultyController.js";

const facultyRoute = express.Router();

facultyRoute.post("/createfaculty",createfaculty);
facultyRoute.get("/findfaculty",getAllfaculty);
facultyRoute.get("/findonefaculty/:id",getOnefaculty);
facultyRoute.put("/updatefaculty/:id",updatefaculty);
facultyRoute.delete("/removefaculty/:id",removefaculty);





export default facultyRoute;