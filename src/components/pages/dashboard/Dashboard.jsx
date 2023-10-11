import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardLeft from "./DashboardLeft";
import axios from "axios";
import Profile from "../profile/Profile";
import AdvisorsMatches from "./AdvisorsMatches";
import Investments from "./Investments";

const Dashboard = () => {
  const [tabActive, setTabActive] = useState(0);
  const [advisor, setadvisor]  =useState([]);
  const userObj = JSON.parse(localStorage.getItem("userObj"));
  const myuser = JSON.parse(userObj.user);
  const id = myuser.data.clientId;
  const URL = "https://localhost:7023/api/Client/matching-advisors";

    axios
    .get(`${URL}/?clientId=${id}`)
    .then((result) => {
      const response = JSON.stringify(result.data);
      setadvisor(JSON.parse(response));
    })
    .catch((error) => {
      console.error(error);
    });

  return (
      <div className="fullpage">
        <DashboardLeft advisor={advisor} setTabActive={setTabActive}/>
        <div className="container-right">
          {(tabActive===0) && <AdvisorsMatches advisor={advisor}/>}
          {(tabActive===1) && <Investments />}
          {(tabActive===2) && <Profile />}
        </div>
      </div>
  );
};

export default Dashboard;
