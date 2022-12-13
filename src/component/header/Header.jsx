import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <>
         <div className="container">
            <div className="logo">
                Employee Details
            </div>
            <div className="btn">
               <span><button id ="search" className="search">Search</button></span>
                  <Link to="/register"> <span><button id ="search" className="add"> + ADD USER</button></span></Link>
            </div>
         </div>
    
        </>
    );
}
export default Header;