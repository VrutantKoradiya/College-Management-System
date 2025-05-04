import express from "express";
import { createcourse, removecourse, getAllcourse, getOnecourse, updatecourse } from "../controller/courseController.js";

const courseRoute = express.Router();

courseRoute.post("/createcourse",createcourse);
courseRoute.get("/findcourse",getAllcourse);
courseRoute.get("/findonecourse/:id",getOnecourse);
courseRoute.put("/updatecourse/:id",updatecourse);
courseRoute.delete("/removecourse/:id",removecourse);





export default courseRoute;