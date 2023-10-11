import React from 'react'
import AdvisorDashboard from './advisor/dashboard/AdvisorDashboard';
import Dashboard from './dashboard/Dashboard';

const Inter = () => {
  const obj = JSON.parse(localStorage.getItem('userObj'));
  return (
    <>
    {(obj.role==="advisor")?<AdvisorDashboard/>:<Dashboard/>}
    </>
  )
}

export default Inter
