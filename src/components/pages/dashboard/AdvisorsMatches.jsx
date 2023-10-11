import React from 'react'
import logoimg from "../../assets/shot-1.png"
import DashboardCard from './DashboardCard'

const AdvisorsMatches = (props) => {
  return (
    <div>
      <div className="mx-4 my-3">
            <h2 className="hey">Hey!</h2>

            <h5 className="my-3">
              <b>
                <strong className='advisor-title'>Your advisor Matches</strong>
              </b>
            </h5>
            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="img" className='proimg'/>
          </div>
          <div className="cards">
            {props.advisor.map((element)=><DashboardCard key={element.advisorId} element={element} />)}
          </div>
    </div>
  )
}

export default AdvisorsMatches
