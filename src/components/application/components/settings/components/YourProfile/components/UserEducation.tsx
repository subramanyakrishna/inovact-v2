import React from 'react'

function UserEducation() {
    return (
        <div className="settings-my-profile-education">
            <span className="settings-my-profile-education-heading">Education</span>
            <div className="settings-my-profile-education-content">
                <div className="settings-my-profile-education-college">
                    <label>University/College</label>
                    <input type="text" placeholder="University Name"/>
                </div>
                <div className="settings-my-profile-education-degree-details">
                    <div className="settings-my-profile-education-degree">
                        <span>Degree</span>
                        <input type="text" placeholder="Eg .   B.E"/>
                    </div>
                    <div className="settings-my-profile-education-degree">
                        <span>Year Of Graduation</span>
                        <input type="text" placeholder="Eg .   2011"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserEducation;
