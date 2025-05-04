import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/addstudent/Addstudent.css";

import axios from "axios";

import { Fragment } from "react";

export const Course = () => {
  //FOR FEYTCH ALL COURSE DATA
  const [course, setcourse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/findcourse");
      setcourse(response.data);
    };
    fetchData();
  }, []);

  //FOR DELETE COURSE
  
  return (
    <Fragment>
      <div className="studentTable">
        <div className="navbar">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link>Courses</Link>
          </div>
          <div>
            <Link to={"/visitfaculty"}>Faculties</Link>
          </div>
        </div>
        
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Course Duration</th>
              <th>Semester</th>
              
            </tr>
          </thead>
          <tbody>
            {course.map((data, index) => (
              <tr key={data._id}>
                <td>{data.code}</td>
                <td>{data.cname}</td>
                <td>{data.description}</td>
                <td>{data.duration}</td>
                <td >{data.semester}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Course;
