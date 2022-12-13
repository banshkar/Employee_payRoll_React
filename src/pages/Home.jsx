import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../component/header/Header";
import Navbar from "../component/NavBar/navbar";
import { DeletedData, GetData } from "../services/userService";
import './Home.css';
import {Link} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Home(){
    const [data ,setData]=useState([])     
      const update =(myid)=>{
          setData(data.filter(e=>e.id!==myid));
      }
    useEffect(()=>{
        GetData().then((reponse)=>{
            setData(reponse);
        }).catch((error)=>{
            console.log(error)
        })
    },[]) 
    
   const handleDeleted =(e)=>{
        const myid =e;
        console.log("handle fuction",myid)
        DeletedData(myid).then((r)=>{
            update(myid)
            toast.success("Deleted Successfully",{position: toast.POSITION.TOP_CENTER})
        }).catch((error)=>{
            toast.error("already register")
        })
   }
    return (
        <>
        <Navbar/>
        <div className="mainHeanser">
        <Header/>
        </div>
        <div className="table">
            <table className="table1">
                <thead className="header">
                    <th>NAME</th>
                    <th>GENEDER</th>
                    <th>DEPARTMENT</th>
                    <th>SALARY</th>
                    <th>IMAGE</th>
                    <th>START DATE</th>
                    <th>ACTION</th>
                </thead>
                <tbody>     
                {

                data.length>0 ?
           
          data.map((value,index)=>{
          return (
             <tr key={index}>
            <td>{value.name}</td>
            <td>{value.gender}</td>
            <td>{value.department}</td>
            <td>{value.salary}</td>
            <td>{value.profileImage}</td>
            <td>{value.startDate}</td>
            <td><div className="btn">
                 <button onClick={()=>{handleDeleted(value.id)
                }} className="deleted" >Deleted</button>
                 <Link to={`/user/edit/${value.id}`} className="link"> <button id ="search" className="update"> Update </button></Link>
                </div>
                </td>
        </tr>
    )
}):"No data"
                }
                </tbody>
            </table>
            <ToastContainer/>
        </div>
        </>
    );
}

export default Home;