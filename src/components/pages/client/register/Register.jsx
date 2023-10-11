import React, { useState } from "react";
import logo from "../../../assets/MicrosoftTeams-image (9).png";
import sideImg from "../../../assets/shot-1.png"
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    advisorId: null,
    phoneNo: "",
    company: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    investmentAmount: "",
    assests: "mutual funds",
  });
  const handleOnChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const [firstActive, setfirstActive] = useState(1);
  const [midActive, setmidActive] = useState(0);
  const [lastActive, setlastActive] = useState(0);
  const handlefirstActive =()=>{
    setfirstActive(1);
    setmidActive(0);
  }
  const handlemidActive = () => {
    setmidActive(1);
    setfirstActive(0);
    setlastActive(0);
  };
  const handlelastActive = () => {
    setmidActive(0);
    setlastActive(1);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const url = "https://localhost:7023/api/Client/SignUp";
    axios
      .post(url, credentials)
      .then((result) => {
        const json = JSON.stringify(result);
        const userObj = {
          'user': json,
          'role': "investor"
        }
        localStorage.setItem('userObj', JSON.stringify(userObj));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

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
        <form
            autoComplete="off"
            className="form"
            method="post"
            onSubmit={handleSave}
          >
            <div className="logo">
              <img src={logo} alt="easyclass" />
            </div>
            <div className="heading">
              <h2>Get Started</h2>
              <h6>Already have an account?</h6>
              <Link to="/login" className="toggle">
                Sign in
              </Link>
            </div>
            <div className="Registeractual-form">
              <div className="RegisterInputsGrid">
                <div
                  className={`RegisterInputsubGrid subgrid1 ${
                    firstActive ? "active" : ""
                  }`}
                >
                  
                  <div className="username-input">
                  
                  <div className="input-wrap">
                      <input
                        type="text"
                        minLength={4}
                        className={`input-field ${
                          credentials.firstName === "" ? "" : "active"
                        }`}
                        value={credentials.firstName}
                        onChange={handleOnChange}
                        name="firstName"
                        autoComplete="off"
                        required
                      />
                      <label>FirstName</label>
                    </div>
                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength={4}
                        className={`input-field ${
                          credentials.lastName === "" ? "" : "active"
                        }`}
                        value={credentials.lastName}
                        onChange={handleOnChange}
                        name="lastName"
                        autoComplete="off"
                        required
                      />
                      <label>LastName</label>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      maxLength={10}
                      minLength={4}
                      className={`input-field ${
                        credentials.phoneNo === "" ? "" : "active"
                      }`}
                      value={credentials.phoneNo}
                      onChange={handleOnChange}
                      name="phoneNo"
                      autoComplete="off"
                      required
                    />
                    <label>Phone no</label>
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className={`input-field ${
                        credentials.email === "" ? "" : "active"
                      }`}
                      value={credentials.email}
                      onChange={handleOnChange}
                      name="email"
                      autoComplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength={4}
                      className={`input-field ${
                        credentials.password === "" ? "" : "active"
                      }`}
                      value={credentials.password}
                      onChange={handleOnChange}
                      name="password"
                      autoComplete="off"
                      required
                    />
                    <label>Password</label>
                  </div>
                </div>
                <div
                  className={`RegisterInputsubGrid subgrid2 ${
                    midActive ? "active" : ""
                  }`}
                >
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className={`input-field ${
                        credentials.address === "" ? "" : "active"
                      }`}
                      value={credentials.address}
                      onChange={handleOnChange}
                      name="address"
                      autoComplete="off"
                      required
                    />
                    <label>Address</label>
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className={`input-field ${
                        credentials.country === "" ? "" : "active"
                      }`}
                      value={credentials.country}
                      onChange={handleOnChange}
                      name="country"
                      autoComplete="off"
                      required
                    />
                    <label>Country</label>
                  </div>
                  <div className="username-input">
                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength={4}
                        className={`input-field ${
                          credentials.state === "" ? "" : "active"
                        }`}
                        value={credentials.state}
                        onChange={handleOnChange}
                        name="state"
                        autoComplete="off"
                        required
                      />
                      <label>State</label>
                    </div>
                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength={4}
                        className={`input-field ${
                          credentials.city === "" ? "" : "active"
                        }`}
                        value={credentials.city}
                        onChange={handleOnChange}
                        name="city"
                        autoComplete="off"
                        required
                      />
                      <label>City</label>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      maxLength={12}
                      minLength={4}
                      className={`input-field ${
                        credentials.zipCode === "" ? "" : "active"
                      }`}
                      value={credentials.zipCode}
                      onChange={handleOnChange}
                      name="zipCode"
                      autoComplete="off"
                      required
                    />
                    <label>Zip Code</label>
                  </div>

                </div>
                <div
                  className={`RegisterInputsubGrid subgrid3 ${
                    lastActive ? "active" : ""
                  }`}
                >
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength={4}
                      className={`input-field ${
                        credentials.company === "" ? "" : "active"
                      }`}
                      value={credentials.company}
                      onChange={handleOnChange}
                      name="company"
                      autoComplete="off"
                      required
                    />
                    <label>Company</label>
                  </div>
                  <div className="input-wrap">
                      <input
                        type="number"
                        minLength={4}
                        className={`input-field ${
                          credentials.investmentAmount === "" ? "" : "active"
                        }`}
                        value={credentials.investmentAmount}
                        onChange={handleOnChange}
                        name="investmentAmount"
                        autoComplete="off"
                        required
                      />
                      <label>Investment Amount</label>
                    </div>
                    <div className="input-wrap">
                      <select name="assests" id="asset" value={credentials.assests} onChange={handleOnChange} className={`input-field ${
                          credentials.assests === "" ? "" : "active"
                        }`}>
                        <option value="mutual funds">Mutual Fund</option>
                        <option value="stock" >Stock</option>
                      </select>
                      <label>Assets</label>
                    </div>
                  <div className="register-buttons">
                  <input type="submit" className="sign-btn" value="Sign Up" />

                  </div>
                </div>
              </div>
              <p className="text">
                By signing up, I agree to the
                <a href="/no">Terms of Services</a> and
                <a href="/no">Privacy Policy</a>
              </p>
            </div>
          </form>
      </div>
    </div>
  </div>
  );
}
