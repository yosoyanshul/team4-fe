

import React, { useState } from "react";
//import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import profile from "./logo.jpg";
import './Register.css';



const Register= () => {

    const[values, setValues]= useState({
        rUsername:"",
        rPassword:"",
        confirmRPassword:"",
    });
    
    const handleRegister=(e) => {
        e.preventDefault();
    };

    const onChange =(e)=>{
        setValues({...values,[e.target.name]: e.target.value});
      };
    
      console.log(values);
    
   

    return(
           <div className="main">
              <div className="sub-main">
                <div>     
                    <div className="imgs">
                          <div className="container-image">
                               <img src={profile} alt="profile" className="profile"/>
                           </div>
                     </div>
               <div>
                <h1>Sign Up</h1>

                <form onSubmit={handleRegister}>
          
                <div className="first-input">
                   <input
                         type="text" 
                         placeholder="Name" 
                         className="input"
                         name="rUsername" 
                         value={values.rUsername} 
                         onChange={onChange} />
                 </div>

                <div className="second-input">
                    <input 
                         type="password"
                         placeholder="Password"
                         className="input"
                         name="rPassword" 
                         value={values.rPassword} 
                        onChange={onChange} />
                </div>

                <br/>
                <div className="third-input">
                     <input
                         type="password"
                         placeholder="Confirm Password" 
                         className="input"
                         name="confirmRPassword"
                         value={values.confirmRPassword} 
                         onChange={onChange} />
                </div>

                <div className="login-button">
                     <button>Register</button>
                 </div>
            </form>
        </div>
       </div>
      </div>
  </div>
  );
  };
      
           
       

export default Register;