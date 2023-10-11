import React from 'react'
import profilePic from '../../assets/836.jpg'
import './profile.css'

const profile = () => {
  const userObj = JSON.parse(localStorage.getItem('userObj'));
  const name = JSON.parse(userObj.user);
  return (
      <div className='profile-container'>
         <div className="left">
           <h2 >General Information</h2>
           <div className="profile_info">
               <div className="profile-data-inputs">
                  <label>
                    First Name
                  </label>
                  <input type="text" value={name.data.firstName}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Last Name
                  </label>
                  <input type="text" value={name.data.lastName}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Email
                  </label>
                  <input type="text" value={name.data.email}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Phone No.
                  </label>
                  <input type="text" value={name.data.phoneNo}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Address
                  </label>
                  <input type="text" value={name.data.address}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    City
                  </label>
                  <input type="text" value={name.data.city}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    State
                  </label>
                  <input type="text" value={name.data.state}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Country
                  </label>
                  <input type="text" value={name.data.country}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Zip Code
                  </label>
                  <input type="text" value={name.data.zipCode}/>
               </div>
               <div className="profile-data-inputs">
                  <label>
                    Assets
                  </label>
                  <input type="text" value={name.data.assests}/>
               </div>
               
           </div>
           </div>
          <div className="right">
            <div className="profileImg"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" /></div>
            <div className="profile-completename my-2">
              <span>{name.data.firstName} {name.data.lastName}</span>
            </div>
          </div>
          
      </div>
  )
}

export default profile
