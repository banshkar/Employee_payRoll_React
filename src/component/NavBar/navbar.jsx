import React  from "react";
import "./nav.css";
import logo from '../../assets/images/logo1.png';
const Navbar=()=>{
    return(
        <>
        <header className="header-content">
            <div className="logo-content">
            <img src={logo} alt="" />
            </div>
           <div className="contents">
            <span className="emp-text">EMPLOYEE</span><br/>
            <span className="emp-text payroll">PAYROLL</span>
           </div>
        </header>
        </>
    );
}
export default Navbar;