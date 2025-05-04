import React, { useState } from 'react';
import "../addstudent/Addstudent.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Addcourse = () => {

    const navigate = useNavigate();

    const courses = {code:"",cname:"",description:"",duration:"",semester:""};
     const [course,setcourse] = useState(courses);
     

     const inputHandler = (e) =>{
         const {name,value} = e.target;
         setcourse({...course,[name]:value});
         
     }
     // FOR INSERT DATA
     const submitForm = async(e) =>{
        e.preventDefault();

        await axios.post("http://localhost:8000/api/createcourse",course)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/Course");
        }).catch(error => console.log(error));
     }
  return (
    <div className='addStudent'>
        <Link to={"/course"}>back</Link>
        <h3>Add New Course</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="code">Course Code</label>
                <input type="text" name="code" onChange={inputHandler} id="code" autoComplete='off' placeholder='Course Code...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="cname">Course Name</label>
                <input type="text" name="cname" onChange={inputHandler} id="cname" autoComplete='off' placeholder='Course Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={inputHandler} id="description" autoComplete='off' placeholder='Description...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="duration">Duration</label>
                <input type="text" name="duration" onChange={inputHandler} id="duration" autoComplete='off' placeholder='Duration...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="semester">Semester</label>
                <input type="text" name="semester" onChange={inputHandler} id="semester" autoComplete='off' placeholder='Semester....' />
            </div>
            <div className='inputgroup'>
                <button type="submit" >Add Course</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default Addcourse;