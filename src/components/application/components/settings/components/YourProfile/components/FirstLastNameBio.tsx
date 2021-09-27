import React from 'react'

function FirstLastNameBio() {
    return (
        <div className="settings-my-profile-details">
            <div>
                <div className="settings-my-profile-details-name">
                    <span>First Name</span>
                    <input type="text"/>
                </div>
                <div className="settings-my-profile-details-name">
                    <span>Last Name</span>
                    <input type="text"/>
                </div>
            </div>
            <div className="settings-my-profile-details-bio">
                <span >Bio</span>
                <textarea />
            </div>
        </div>
    )
}

export default FirstLastNameBio;
