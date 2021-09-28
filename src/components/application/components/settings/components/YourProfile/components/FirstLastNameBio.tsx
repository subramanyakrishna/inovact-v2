import React from 'react'

function FirstLastNameBio() {
    return (
        <div className="settings-my-profile-details">
            <div>
                <div className="settings-my-profile-details-name">
                    <span>First Name</span>
                    <input type="text" placeholder="Jane"/>
                </div>
                <div className="settings-my-profile-details-name">
                    <span>Last Name</span>
                    <input type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className="settings-my-profile-details-bio">
                <span >Bio</span>
                <textarea placeholder="Enter your new bio."/>
            </div>
        </div>
    )
}

export default FirstLastNameBio;
