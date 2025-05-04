import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../getstudent/Student.css";

import axios from "axios";
import toast from "react-hot-toast";
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
  const deletecourse = async (sid) => {
    await axios
      .delete(`http://localhost:8000/api/removecourse/${sid}`)
      .then((response) => {
        setcourse((prevStudent) =>
          prevStudent.filter((course) => course._id !== sid)
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
            <Link>Courses</Link>
          </div>
          <div>
            <Link to={"/faculty"}>Faculties</Link>
          </div>
        </div>
        <Link to={"/addcourse"} className="Addbutton">
          Add Course
        </Link>
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Course Duration</th>
              <th>Semester</th>
              <th>Actions</th>
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
                <td className="actionbuttons"  style={{width:"100px"}}>
                  <button onClick={() => deletecourse(data._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/updatecourse/` + data._id}>
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

export default Course;
