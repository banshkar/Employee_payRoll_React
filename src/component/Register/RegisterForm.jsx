import React from "react";
import "./style.css";
import Navbar from "../NavBar/navbar";
import { useState } from "react";
import { DeletedData, Registration } from "../../services/userService";
import image1 from '../../assets/profile-images/Ellipse 1.png'
import image2 from '../../assets/profile-images/Ellipse -3.png'
import image3 from '../../assets/profile-images/Ellipse -7.png'
import image4 from '../../assets/profile-images/Ellipse -8.png'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const RegisterFrom=()=>{
   const [userRegistration ,setUserRegistration]=useState({name:"",image:"", gender:"",department:"",salary:"",notes:"",startDate:""});
   const handleChange=(e)=>{
    const name = e.target.name;
    const value =e.target.value;
    const date =new Date();
    const date1 =date.getDate();
    const month =date.getMonth();
    const year =date.getFullYear();
    const startDate =date1+"/"+month+"/"+year;
     setUserRegistration({...userRegistration, [name]:value ,startDate:startDate})
   }; 
   const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(userRegistration);
        Registration(userRegistration).then((response)=>{
          
            toast.success(response.data.message,{position: toast.POSITION.TOP_CENTER})
        }).catch((error)=>{
                 toast.error(error.response.data)
        })
       setUserRegistration({name:"",image:"", gender:"",department:"",salary:"",notes:"",startDate:""})
   }
return (
    <>
    <Navbar/>
     <div className="form-content">
        <form className="form" onSubmit={handleSubmit} >
            <div className="head-form">EmployeePayRoll Form</div>
            <div className="row-content">
                <label className="label text" htmlFor="name">Name</label>
                <input className="input" onChange={ handleChange} type="text"  placeholder="Enter Your Name" name="name" required/>
            </div> 
            <div className="row-content">
                <label className="label text"  htmlFor="profile">Profile Image</label>
                 <div className="profile-radio-content">
                    <label>       
                          <input className="input" type="radio" name="image" id="profile1" onChange={ handleChange} required/>
                       <img className="profile1"   id="image1"  src={image1}></img>
                    </label>
                    <label>       
                          <input className="input" type="radio" name="image" id="profile2" onChange={handleChange}    required/>
                       <img className="profile2" id="image2" src={image2}></img>
                    </label>
                    <label>       
                          <input className="input" type="radio" name="image" id="profile3" onChange={handleChange}    required/>
                       <img className="profile3" id="image3" src={image3} ></img>
                    </label>
                    <label>       
                          <input className="input" type="radio" name="image" id="profile4" onChange={handleChange}    required/>
                       <img className="profile4" id="image4" src={image4}></img>
                    </label>
                 </div>
            </div> 
            <div className="row-content">
                <label className="label text"  htmlFor="geneder">Geneder</label>
                <div>
                <input  type="radio" name="gender" id="male" onChange={handleChange} value="male"/>
                <label className="text"  htmlFor="male">Male</label>
                <input  type="radio" name="gender" id="female"  onChange={handleChange} value="female"/>
                <label className="text"  htmlFor="female">Female</label>
                </div>
            </div> 
            <div className="row-content">
                <label className="label text"  htmlFor="geneder">Department</label>
                <div>
                <input className="checkbox" type="checkbox" name="department" id="hr" onChange={handleChange} value="HR" />
                <label  className="text"  htmlFor="hr">HR</label>
                <input className="checkbox" type="checkbox" name="department" id="sales" onChange={handleChange} value="Sales"/>
                <label className="text" htmlFor="sales">Sales</label>
                <input className="checkbox" type="checkbox" name="department" id="finace"  onChange={handleChange} value="Finace"/>
                <label className="text"  htmlFor="finace">Finace</label>
                <input className="checkbox" type="checkbox" name="department" id="engineer"     onChange={handleChange} value="engineer"/>
                 <label className="text"  htmlFor="engineer">Engineer</label>
                <input className="checkbox" type="checkbox" name="department" id="other"      onChange={handleChange} value="other"/>
                 <label className="text"  htmlFor="other">Other</label>
                </div>
            </div> 
            <div className="row-content">
            <label className="label text"  htmlFor="salary">Salary</label>
              <div>
                <select name="salary" id="salary" className="select" onChange={handleChange}>
                    <option >Select Salary</option>
                    <option value="20000">Rs.20000</option>
                    <option value="30000">Rs.30000</option>
                    <option value="40000">Rs.40000</option>
                    <option value="50000">Rs.50000</option>
                    <option value="60000">Rs.60000</option>
                    <option value="70000">Rs.70000</option>
                </select>
            </div> 
            </div> 
           
            <div className="row-content">
                <label className="label text"  htmlFor="notes">Notes</label>
                <textarea id="notes" className="input" name="notes" placeholder="" style={{height:100}} onChange={handleChange}></textarea>
            </div> 
            <div className="buttonParent">
                <a href="#" className="resetButton button cancelButton">Cancel</a>
            </div>
            <div className="sumit-reset">
                <button type="submit" className="button submitButton" id ="submitButton">Submit</button>
                <button   type="reset"  className="resetButton button" id ="submitButton">Reset</button>
            </div>
        </form>
        <ToastContainer/>
     </div>
    </>
);
}
export default RegisterFrom;