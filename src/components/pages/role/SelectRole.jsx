import React from 'react'
import logo from '../../assets/MicrosoftTeams-image (9).png'
import sideImg from '../../assets/shot-1.png'
import advisor from '../../assets/Humaaans - Sitting.png'
import investor from '../../assets/Humaaans - Space.png'
import './SelectRole.css'
import { Link } from 'react-router-dom'
export default function SelectRole() {
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
            Let's start this journey of investment together with Incedo Invest.
          </p>
        </div>
      </div>
      <div class="mt-auto ps-16 ps-xl-20">
        <img
          src={sideImg}
          class="img-fluid rounded-top-start-4"
          alt="..."
        />
      </div>
    </div>
    <div
      class="col-12 col-md-12 col-lg-7 offset-lg-5 min-vh-100 overflow-y-auto d-flex flex-column justify-content-center position-relative bg-body rounded-top-start-lg-4 border-start-lg shadow-soft-5"
    >
      <div class="w-md-50 mx-auto px-10 px-md-0 py-10">
      <form >
      {/* <div className="forms-wrap"> */}
             <div className="logo">
               <img src={logo} alt="incvest" /> 
             </div>

             <div className="heading">
                      <h2>Get Started</h2>
                      <h6>Already have an account?</h6>
                      <Link to="/login" className="toggle">Sign in</Link>
                  </div>

             <div className="selectRole">
                   <div className="advisorRole roleCard">
                   <Link to='/register/advisor' className="mainRoleCard">
                   <img src={advisor} alt="" />
                   <h2>Advisor</h2>
                   </Link>
                   </div>
                   <div className="investRole roleCard">
                   <Link to='/register/investor' className="mainRoleCard">
                   <img src={investor} alt="" />
                   <h2>Investor</h2>
                   </Link>
                   </div>
               </div>
         {/* </div> */}
      </form>
      </div>
    </div>
  </div>
  )
}
