import React, { useState } from 'react';
import "../addstudent/Addstudent.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Addstudent = () => {

    const navigate = useNavigate();

    const students = {sid:"",sname:"",dob:"",address:"",mobileno:""};
     const [student,setstudent] = useState(students);
     

     const inputHandler = (e) =>{
         const {name,value} = e.target;
         setstudent({...student,[name]:value});
         
     }
     // FOR INSERT DATA
     const submitForm = async(e) =>{
        e.preventDefault();

        await axios.post("http://localhost:8000/api/createstudent",student)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/students");
        }).catch(error => console.log(error));
     }
  return (
    <div className='addStudent'>
        <Link to={"/students"}>back</Link>
        <h3>Add New Student</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="sid">Student Id</label>
                <input type="text" name="sid" onChange={inputHandler} id="sid" autoComplete='off' placeholder='Student Id...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="sname">Student Name</label>
                <input type="text" name="sname" onChange={inputHandler} id="sname" autoComplete='off' placeholder='Student Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="dob">Date Of Birth</label>
                <input type="text" name="dob" onChange={inputHandler} id="dob" autoComplete='off' placeholder='Date of Birth...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" onChange={inputHandler} id="address" autoComplete='off' placeholder='Address...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="mobileno">Mobille No.</label>
                <input type="text" name="mobileno" onChange={inputHandler} id="mobileno" autoComplete='off' placeholder='Mobile No....' />
            </div>
            <div className='inputgroup'>
                <button type="submit" >Add Student</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default Addstudent;