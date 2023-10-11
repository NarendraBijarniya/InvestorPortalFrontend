import React, { useContext, useEffect, useRef } from "react";
import profilePic from "../../assets/7309681.jpg";
import Modal from "../templates/Modal";
import investContext from '../../context/investContext'
const DashboardCard = (props) => {
  const { setAdvisorO} = useContext(investContext);
  const handleModal=()=>{
    setAdvisorO(props.element);
  }
  return (
    <div >
      <div className="card mx-4 my-3" style={{ width: "20rem" }}>
        <button type="button" className="btnbook">
          Book Meeting
        </button>
        <div className="dashCardProfile">
          <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" className="card-img-top" alt="Logo" />

          <div className="dashCardProfileInfo mx-2">
            <h5 className="card-title">
              {props.element.firstName} {props.element.lastName}
            </h5>

            <h6 className="companyname">{props.element.company}</h6>
          </div>
        </div>

        <div className="card-body">
          <div className="box1">
            <h5>Expertise</h5>
            <ul>
              <li>
                <span>{props.element.expertise}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="clienttype">
          <span>
            <b>Client Types</b>
          </span>
          <ul>
            <li>
              <span>Young Professionals</span>
            </li>
            <li>
              <span>HealthCare workers</span>
            </li>
            <li>
              <span>Teachers</span>
            </li>
            <li>
              <span>Lawyers</span>
            </li>
          </ul>
        </div>

        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleModal}>
          See Full Profile
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <Modal />

    </div>
      </div>
    </div>
  );
};

export default DashboardCard;
