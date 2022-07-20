import React, { useState } from "react";
//import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import profile from "./logo.jpg";
import './Login.css';
//import Register from "../Registe/Register";
//import {Link} from'react-router-dom';

function Login(){

    const[username,setUsername] = useState("");
    const[password,setPassword]= useState("");
    
    const[allData,setAllData] = useState([]);

    const handleLogin=(event)=>{
        event.preventDefault();
        const new_data = {username: username, password:password};
        setAllData([... allData, new_data]);
        console.log(allData);
    }
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
                    <h1>Log In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="first-input">
                          <input type="text" placeholder="Name" className="name" value={username} onChange={(e)=>setUsername(e.target.value)} id="name"/>
                        </div>

                        <div className="second-input">
                            <input type="password" placeholder="Password" className="l_name" value={password} onChange={(e)=>setPassword(e.target.value)} />
                         </div>
        
                        <div className="login-button" >
                        
                         <button>Login</button>
                         </div>
                         </form>
                </div>
                <p className="link">
                    Don't have an Account ? 
                 </p>
            </div>
        </div>
       </div>
  
  );
      
};
export default Login;



