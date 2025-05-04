import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../addstudent/Addstudent.css"
import axios from "axios";
import toast from "react-hot-toast";

const Updatefaculty = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const faculties = {fid:"",fname:"",email:"",qualification:"",courseassignment:"",techexperience:""};
    const [faculty,setfaculty] = useState(faculties);

    const inputChangeHandler = (e)=>{
        const {name , value} = e.target;
        setfaculty({...faculty,[name]:value});
        console.log(faculty);
    }
    //WE SET FACULTY DATA ON INPUT FIELD
    useEffect(()=>{
          axios.get(`http://localhost:8000/api/findonefaculty/${id}`)
          .then((response)=>{
           setfaculty(response.data);     
          }).catch((error)=>{
            console.log(error);
          })
    },[id]);
    
     // FOR UPDATE
    const submitForm = async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8000/api/updatefaculty/${id}`,faculty)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/Faculty");
        }).catch(error => console.log(error));
    }

  return (
    <div className='addStudent'>
        <Link to={"/Faculty"}>back</Link>
        <h3>Update Faculty</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="fid">Faculty ID</label>
                <input type="text" name="fid"value={faculty.fid} onChange={inputChangeHandler} id="fid" autoComplete='off' placeholder='Faculty ID...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="fname">Faculty Name</label>
                <input type="text" name="fname" value={faculty.fname} onChange={inputChangeHandler} id="fname" autoComplete='off' placeholder='Faculty Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="email">Email Id</label>
                <input type="text" name="email"value={faculty.email} onChange={inputChangeHandler} id="email" autoComplete='off' placeholder='Email...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="qualification">Qualification</label>
                <input type="text" name="qualification"value={faculty.qualification} onChange={inputChangeHandler} id="qualification" autoComplete='off' placeholder='Qualification...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="courseassignment">Course Assignment</label>
                <input type="text" name="courseassignment"value={faculty.courseassignment} onChange={inputChangeHandler} id="courseassignment" autoComplete='off' placeholder='Course Assignment....' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="techexperience">Teaching Experience</label>
                <input type="text" name="techexperience"value={faculty.techexperience} onChange={inputChangeHandler} id="techexperience" autoComplete='off' placeholder='Teaching Experience...' />
            </div>
            <div className='inputgroup'>
                <button type="submit">Update Faculty</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default Updatefaculty;