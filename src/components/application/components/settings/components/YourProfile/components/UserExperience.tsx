import React from 'react'

function UserExperience() {
    return (
        <div className="settings-my-profile-education">
            <span className="settings-my-profile-education-heading">Experience</span>
            <div className="settings-my-profile-education-content">
                <div className="settings-my-profile-education-college">
                    <label>Current Organisation</label>
                    <input type="text" placeholder="Organisation Name"/>
                </div>
                <div className="settings-my-profile-education-degree-details">
                    <div className="settings-my-profile-education-degree">
                        <span>Current Designation</span>
                        <input type="text" placeholder="Eg .   Developer"/>
                    </div>
                    <div className="settings-my-profile-education-degree">
                        <span>Starting Year</span>
                        <input type="text" placeholder="Eg .   2011"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserExperience;
