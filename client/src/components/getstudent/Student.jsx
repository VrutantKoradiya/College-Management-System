import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../getstudent/Student.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Fragment } from "react";

export const Student = () => {
  //FOR FETCH ALL STUDENT DATA
  const [student, setstudent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/findstudent");
      setstudent(response.data);
    };
    fetchData();
  }, []);

  //FOR DELETE STUDENT
  const deleteStudent = async (sid) => {
    await axios
      .delete(`http://localhost:8000/api/removestudent/${sid}`)
      .then((response) => {
        setstudent((prevStudent) =>
          prevStudent.filter((student) => student._id !== sid)
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
            <Link to={"/faculty"}>Faculties</Link>
          </div>
        </div>
        <Link to={"/addstudent"} className="Addbutton">
          Add Student
        </Link>
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Mobile No.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, index) => (
              <tr key={data._id}>
                <td>{data.sid}</td>
                <td>{data.sname}</td>
                <td>{data.dob}</td>
                <td>{data.address}</td>
                <td>{data.mobileno}</td>
                <td className="actionbuttons">
                  <button onClick={() => deleteStudent(data._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/updatestudent/` + data._id}>
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

export default Student;
