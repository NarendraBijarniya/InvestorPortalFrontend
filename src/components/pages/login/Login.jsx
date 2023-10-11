import React, { useState } from 'react'
import logo from '../../assets/MicrosoftTeams-image (9).png'
import '../advisor/register/RegisterLogin.css'
import imgside from "../../assets/shot-1.png"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Login(){
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
  email: "",
  password: ""
}); 
const handleOnChange = (event) =>{
  setcredentials({...credentials,[event.target.name]: event.target.value});
}

const [role, setrole] = useState("advisor");
let url = "https://localhost:7023/api/Advisor/login";
  if(role==="investor") url = "https://localhost:7023/api/Client/login"
  const handleOnChangerole = (event) =>{
    setrole(event.target.value);
  }
  
  const handleSaveLogin = () => {

axios.post(url, credentials).then((result) => {
    const json = JSON.stringify(result);
    const userObj = {
      'user': json,
      'role': role
    }
    localStorage.setItem('userObj', JSON.stringify(userObj));
    navigate("/dashboard");
}).catch( (error)=> {
  console.error(error);
})

  }
  return (
    
    <div
      class="row g-0 justify-content-center gradient-bottom-right start-purple middle-indigo end-pink"
    >
      <div
        class="col-md-6 col-lg-5 col-xl-5 position-fixed start-0 top-0 vh-100 overflow-y-hidden d-none d-lg-flex flex-lg-column"
      >
        <div class="p-12 py-xl-10 px-xl-20">
          
          <div class="mt-16">
            <h1 class="ls-tight fw-bolder display-6 text-white mb-5">
              Trade the world’s top assets
            </h1>
            <p class="text-white text-opacity-75 pe-xl-24">
              Be part of our team and let's start this journey of investment together.
            </p>
          </div>
        </div>
        <div class="mt-auto ps-16 ps-xl-20">
          <img
            src={imgside}
            class="img-fluid rounded-top-start-4"
            alt="..."
          />
        </div>
      </div>
      <div
        class="col-12 col-md-12 col-lg-7 offset-lg-5 min-vh-100 overflow-y-auto d-flex flex-column justify-content-center position-relative bg-body rounded-top-start-lg-4 border-start-lg shadow-soft-5"
      >
        <div class="w-md-50 mx-auto px-10 px-md-0 py-10">
          
          <form method='post' autoComplete='off' className="sign-in-form" onSubmit={handleSaveLogin}>
                 <div className="logo">
                   <img src={logo} alt="incvest" /> 
                 </div>
  
                 <div className="heading">
                   <h2>Welcome Back</h2>
                   <h6>Not registred yet?</h6>
                   <Link to="/register" className="toggle">Sign up</Link>
                 </div>
  
                 <div className="actual-form">
                   <div className="input-wrap">
                     <select value={role} className='input-field' name='helo' onChange={handleOnChangerole}>
                       <option value="advisor">Advisor</option>
                       <option value="investor">Investor</option>
                     </select>
                 <label>Role</label>
                 </div>
                 <div className="input-wrap">
                   <input
                     type="email"
                     value={credentials.email}
                     onChange={handleOnChange}
                     name='email'
                     minLength={4}
                     className={`input-field ${credentials.email===''?'':'active'}`}
                     autoComplete='off'
                     required
                   />
                   <label>Email</label>
                 </div>
  
                 <div className="input-wrap">
                  <input
                     type="password"
                     value={credentials.password}
                     name='password'
                     onChange={handleOnChange}
                     minLength={4}
                       className={`input-field ${credentials.password===''?'':'active'}`}
                       autoComplete='off'
                       required
                     />
                     <label>Password</label>
                   </div>
  
                   <input type="button" value="Sign In"  className="sign-btn" onClick={handleSaveLogin} />
  
                   <p className="text">
                     Forgotten your password or you login datails?
                     {/* eslint-disable-next-line */}
                     <a href="#">Get help</a> signing in
                   </p>
                 </div>
               </form>
        </div>
      </div>
    </div>
  );
}