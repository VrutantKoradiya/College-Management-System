import React, { useState } from 'react';
import "../addstudent/Addstudent.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {

    const navigate = useNavigate();

    const faculties = {fid:"",fname:"",email:"",qualification:"",courseassignment:"",techexperience:""};
     const [faculty,setfaculty] = useState(faculties);
     

     const inputHandler = (e) =>{
         const {name,value} = e.target;
         setfaculty({...faculty,[name]:value});
         
     }
     // FOR INSERT DATA
     const submitForm = async(e) =>{
        e.preventDefault();

        await axios.post("http://localhost:8000/api/createfaculty",faculty)
        .then((response)=>{
             toast.success(response.data.msg , {position:"top-right"});
             navigate("/faculty");
        }).catch(error => console.log(error));
     }
  return (
    <div className='addStudent'>
        <Link to={"/faculty"}>back</Link>
        <h3>Add New Faculty</h3>
        <form className="addform" onSubmit={submitForm}>
            <div className='inputgroup'>
                <label htmlFor="fid">Faculty ID</label>
                <input type="text" name="fid" onChange={inputHandler} id="fid" autoComplete='off' placeholder='Faculty ID...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="fname">Faculty Name</label>
                <input type="text" name="fname" onChange={inputHandler} id="fname" autoComplete='off' placeholder='Faculty Name...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="email">Email ID</label>
                <input type="text" name="email" onChange={inputHandler} id="email" autoComplete='off' placeholder='Email Id...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="qualification">Qualification</label>
                <input type="text" name="qualification" onChange={inputHandler} id="qualification" autoComplete='off' placeholder='Qualification...' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="courseassignment">Course Assignment</label>
                <input type="text" name="courseassignment" onChange={inputHandler} id="courseassignment" autoComplete='off' placeholder='Course Assignment....' />
            </div>
            <div className='inputgroup'>
                <label htmlFor="techexperience">Teaching Experience</label>
                <input type="text" name="techexperience" onChange={inputHandler} id="techexperience" autoComplete='off' placeholder='Teaching Experience....' />
            </div>
            <div className='inputgroup'>
                <button type="submit" >Add Faculty</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default AddFaculty;