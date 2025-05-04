import { Fragment } from "react";
import React from "react";
import logo from "../Home/students.svg";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <div className="imageDiv">
          <img src={logo} alt="image of students" />
        </div>
        <div className="contentDiv">
          <div className="title">
            {" "}
            <h1>Welcome To, <br />College Management Website</h1>{" "}
          </div>
          <div className="content">
            {" "}
            <p>
              Welcome to our comprehensive College Management System. Our
              user-friendly platform empowers you to focus on what truly matters
              - education. Make informed decisions with real-time data and
              analytics. Enhance student experience and boost administrative
              efficiency. Experience seamless college management today! 
              Make informed decisions with real-time data and reporting. Enhance
              communication between staff, students, and parents. Experience
              increased efficiency, productivity, and cost savings. Join us in
              revolutionizing campus management. Start your free trial today and
              discover the future of education technology. ok ok
            </p>
          </div>
          <br />
          <div className="visit"> 
            <Link to={"/visitcourse"}>Visit Here </Link>
          </div>
          <br />
          <div className="admin">
            <Link to={"/adminform"}><button>Login As Admin</button></Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
