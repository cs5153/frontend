import React from 'react'
import './GroupSettings.css';


function GroupSettings() {

return (
    <>
      <div className='groupSettings'>
          <div className='groupName'>Group Name</div>
          <div className='data'>
              <div className='tripSettings'>
                
                <div className='tripSettingLabel'>
                    Trip Settings
                </div>
                
                <div className='picture'>
                </div>
                
                <div className='location'>
                </div>

                <div className='deleteTrip'>
                </div>
              </div>
              <div className='inviteUsers'>
                
                <div className='inviteUsersTitle'>
                    Invite Users
                </div>
                <div className='tripMembers'></div>
              </div>
          </div>
      </div>

    </>
)
}

export default GroupSettings;