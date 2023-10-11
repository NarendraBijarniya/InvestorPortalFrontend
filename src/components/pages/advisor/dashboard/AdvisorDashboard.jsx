import React, { useState } from 'react'
import AdvisorDashboardLeft from './AdvisorDashboardLeft'
import ScheduledMeeting from './ScheduledMeeting'
import ClientList from './ClientList'
import AllInvestments from './AllInvestments'
import Profile from './AdvisorProfile'

const AdvisorDashboard = () => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <div className="fullpage">
        <AdvisorDashboardLeft setTabActive={setTabActive}/>
        <div className="container-right">
          {(tabActive===0) && <ScheduledMeeting />}
          {(tabActive===1) && <ClientList />}
          {(tabActive===2) && <AllInvestments />}
          {(tabActive===3) && <Profile />}
        </div>
      </div>
  )
}

export default AdvisorDashboard
