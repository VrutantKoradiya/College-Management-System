import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../addstudent/Addstudent.css"
import axios from "axios";
import toast from "react-hot-toast";

const Updatestudent = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const students = {sid:"",sname:"",dob:"",address:"",mobileno:""}
    const [student,setstudent] = useState(students);

    const inputChangeHandler = (e)=>{
        const {name , value} = e.target;
        setstudent({...student,[name]:value});
        console.log(student);
    }
    //WE SET STUDENT DATA ON INPUT FIELD
    useEffect(()=>{
          axios.get(`http://localhost:8000/api/findonestudent/${id}`)
          .then((response)=>{
           setstudent(response.data);     
          }).catch((error)=>{
            console.log(error);
          })
    },[id]);
    
     // FOR UPDATE
    const submitForm = async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8000/api/updatestudent/${id}`,student)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/students");
        }).catch(error => console.log(error));
    }

  return (
    <div className='addStudent'>
        <Link to={"/students"}>back</Link>
        <h3>Update Student</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="sid">Student Id</label>
                <input type="text" name="sid"value={student.sid} onChange={inputChangeHandler} id="sid" autoComplete='off' placeholder='Student Id...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="sname">Student Name</label>
                <input type="text" name="sname" value={student.sname} onChange={inputChangeHandler} id="sname" autoComplete='off' placeholder='Student Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="dob">Date Of Birth</label>
                <input type="text" name="dob"value={student.dob} onChange={inputChangeHandler} id="dob" autoComplete='off' placeholder='Date of Birth...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="address">Address</label>
                <input type="text" name="address"value={student.address} onChange={inputChangeHandler} id="address" autoComplete='off' placeholder='Address...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="mobileno">Mobille No.</label>
                <input type="text" name="mobileno"value={student.mobileno} onChange={inputChangeHandler} id="mobileno" autoComplete='off' placeholder='Mobile No....' />
            </div>
            <div className='inputgroup'>
                <button type="submit">Update Student</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default Updatestudent;