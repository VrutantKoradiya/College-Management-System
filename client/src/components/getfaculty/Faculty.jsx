import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../getstudent/Student.css";

import axios from "axios";
import toast from "react-hot-toast";
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

  //FOR DELETE FACULTY
  const deletefaculty = async (sid) => {
    await axios
      .delete(`http://localhost:8000/api/removefaculty/${sid}`)
      .then((response) => {
        setfaculty((prevStudent) =>
          prevStudent.filter((faculty) => faculty._id !== sid)
        );
        console.log(response);
        toast.success(response.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div className="studentTable">
        <div className="navbar">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/Students"}>Students</Link>
          </div>
          <div>
            <Link to={"/Course"}>Courses</Link>
          </div>
          <div>
            <Link to={"faculty"}>Faculties</Link>
          </div>
        </div>
        <Link to={"/addfaculty"} className="Addbutton">
          Add Faculty
        </Link>
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Faculty Name</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Course Assignment</th>
              <th>Teaching Exprience</th>
              <th>Actions</th>
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
                <td className="actionbuttons"  style={{width:"100px"}}>
                  <button onClick={() => deletefaculty(data._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/updatefaculty/` + data._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Faculty;
