import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../addstudent/Addstudent.css"
import axios from "axios";
import toast from "react-hot-toast";

const Updatecourse = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const courses = {code:"",cname:"",description:"",duration:"",semester:""}
    const [course,setcourse] = useState(courses);

    const inputChangeHandler = (e)=>{
        const {name , value} = e.target;
        setcourse({...course,[name]:value});
        console.log(course);
    }
    //WE SET COURSE DATA ON INPUT FIELD
    useEffect(()=>{
          axios.get(`http://localhost:8000/api/findonecourse/${id}`)
          .then((response)=>{
           setcourse(response.data);     
          }).catch((error)=>{
            console.log(error);
          })
    },[id]);
    
     // FOR UPDATE
    const submitForm = async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8000/api/updatecourse/${id}`,course)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/Course");
        }).catch(error => console.log(error));
    }

  return (
    <div className='addStudent'>
        <Link to={"/Course"}>back</Link>
        <h3>Update Course</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="code">Course Code</label>
                <input type="text" name="code"value={course.code} onChange={inputChangeHandler} id="code" autoComplete='off' placeholder='Course Code...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="cname">Course Name</label>
                <input type="text" name="cname" value={course.cname} onChange={inputChangeHandler} id="cname" autoComplete='off' placeholder='Course Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="description">Description</label>
                <input type="text" name="description"value={course.description} onChange={inputChangeHandler} id="description" autoComplete='off' placeholder='Description...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="duration">Duration</label>
                <input type="text" name="duration"value={course.duration} onChange={inputChangeHandler} id="duration" autoComplete='off' placeholder='Duration...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="semester">Semester</label>
                <input type="text" name="semester"value={course.semester} onChange={inputChangeHandler} id="semester" autoComplete='off' placeholder='Semester....' />
            </div>
            <div className='inputgroup'>
                <button type="submit">Update Course</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default Updatecourse;