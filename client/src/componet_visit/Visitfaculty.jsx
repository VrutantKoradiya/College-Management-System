import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/getstudent/Student.css" 

import axios from "axios";

import { Fragment } from "react";

export const Faculty = () => {
  //FOR FEYTCH ALL FACULTY DATA
  const [faculty, setfaculty] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/findfaculty");
      setfaculty(response.data);
    };
    fetchData();
  }, []);

  
  return (
    <Fragment>
      <div className="studentTable">
        <div className="navbar">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          
          <div>
            <Link to={"/visitcourse"}>Courses</Link>
          </div>
          <div>
            <Link to={"/visitfaculty"}>Faculties</Link>
          </div>
        </div>
        
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Faculty Name</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Course Assignment</th>
              <th>Teaching Exprience</th>
              </tr>
          </thead>
          <tbody>
            {faculty.map((data, index) => (
              <tr key={data._id}>
                <td>{data.fid}</td>
                <td>{data.fname}</td>
                <td>{data.email}</td>
                <td>{data.qualification}</td>
                <td >{data.courseassignment}</td>
                <td>{data.techexperience}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Faculty;
