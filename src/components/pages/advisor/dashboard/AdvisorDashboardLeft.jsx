import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import incedologo from "../../../assets/MicrosoftTeams-image (9).png";

const AdvisorDashboardLeft = (props) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
      localStorage.removeItem("userObj");
      navigate("/");
    };
  
    return (
      <div>
        <div className="container-left">
          <div className="accordion-item mx-2 my-4">
            <img src={incedologo} className="logoimg" alt="logo" />
  
           
            <div className="dash-left-icon">
            
               
            <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bxs-calendar'></i>
                      </div>
              <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(0)}>
                <span>
                  <b>Meeting Schedule</b>
                </span>
              </Link>
            </div>
            <div className="dash-left-icon">
            
            <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bxs-group'></i>
                      </div>
              <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(1)}>
                <span>
                  <b>Clients</b>
                </span>
              </Link>
            </div>
            <div className="dash-left-icon">
            
            <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bx-list-check' ></i>
                      </div>
              <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(2)}>
                <span>
                  <b>Investments</b>
                </span>
              </Link>
            </div>
            <div className="dash-left-icon">
            {/* <i class='bx bxs-user-circle' ></i> */}
            <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bxs-user-circle' ></i>
                      </div>
              <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(3)}>
                <span>
                  <b>Profile</b>
                </span>
              </Link>
            </div>
            
          </div>
  
          <div>
            <div className="dash-left-icon">
              
              <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i className="bx bx-log-out"></i>
                      </div>
              <span className="log" onClick={handleLogOut}>
                <b>Log Out</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdvisorDashboardLeft
