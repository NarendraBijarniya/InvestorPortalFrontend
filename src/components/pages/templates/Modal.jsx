import React, { useContext, useEffect } from 'react'
import './modal.css'
import profilePic from "../../assets/7309681.jpg";
import investContext from '../../context/investContext';
const Modal = () => {
  const {advisorO} = useContext(investContext);
  
    return (
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Advisor Profile</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <div className="dashCardProfile">
          <img src={profilePic} className="card-img-top" alt="Logo" />

          <div className="dashCardProfileInfo">
            <h5 className="card-title">
              {advisorO.firstName} {advisorO.lastName}
            </h5>

            <h6 className="companyname">{advisorO.company}</h6>
          </div>
        </div>

        <div className="card-body">
          <div className="modal-box1">
            <h5>Advisor Details</h5>
            <ul>
              <li>
                <div className='modal-box-info'>
                <i className='bx bxs-envelope'></i>
                <span>{advisorO.email}</span>
                </div>
              </li>
              <li>
                <div className='modal-box-info'>
                <i className='bx bxs-phone' ></i>
                <span>{advisorO.phoneNo}</span>
                </div>
              </li>
              <li>
                <div className='modal-box-info'>
                <i className='bx bxs-home' ></i>
                <span>{advisorO.address}, {advisorO.city}, {advisorO.state}, {advisorO.country}, {advisorO.zipCode}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body">
          <div className="box1">
            <h5>Expertise</h5>
            <ul>
              <li>
                <span>{advisorO.expertise}</span>
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
        </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary">Book Meeting</button>
            </div>
          </div>
        </div>
          )
}

export default Modal
