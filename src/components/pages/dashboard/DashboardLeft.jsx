import React, { useContext } from "react";
import incedologo from "../../assets/MicrosoftTeams-image (9).png";

import { Link, useNavigate } from "react-router-dom";
const DashboardLeft = (props) => {
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

          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="dash-left-icon">
                 
                 <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bxs-group' ></i>
                      </div>
                <Link className="link-dash" to="/dashboard" onClick={()=>props.setTabActive(0)}>
                  <span>
                    <b>Advisor Matches</b>
                  </span>
                </Link>
              </div>
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body mx-4">
              {props.advisor.map((ele)=><p>{ele.firstName} {ele.lastName}</p>)}
            </div>
          </div>
          <div className="dash-left-icon">
             
             <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bx-list-check' ></i>
                      </div>
            <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(1)}>
              <span>
                <b>Investments</b>
              </span>
            </Link>
          </div>
          <div className="dash-left-icon">
          
          <div id='backPurpleicon'
                        className="icon icon-shape text-white bg-primary rounded-circle text-sm"
                      >
                        <i class='bx bxs-user-circle' ></i>
                      </div>
            <Link to="/dashboard" className="link-dash" onClick={()=>props.setTabActive(2)}>
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
};

export default DashboardLeft;
