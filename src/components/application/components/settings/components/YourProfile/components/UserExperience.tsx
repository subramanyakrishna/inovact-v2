import React from 'react'
import { useSelector } from 'react-redux'

function UserExperience({ handleUserInfoChange, userInfo }: any) {
    return (
        <div className="settings-my-profile-education">
            <span className="settings-my-profile-education-heading">
                Experience
            </span>
            <div className="settings-my-profile-education-content">
                <div className="settings-my-profile-education-college">
                    <label>Current Organisation</label>
                    <input
                        type="text"
                        placeholder="Organisation Name"
                        defaultValue={userInfo['organization']}
                        onChange={(e) =>
                            handleUserInfoChange('organization', e.target.value)
                        }
                    />
                </div>
                <div className="settings-my-profile-education-degree-details">
                    <div className="settings-my-profile-education-degree">
                        <span>Current Designation</span>
                        <input
                            type="text"
                            placeholder="Eg .   Developer"
                            value={userInfo['designation']}
                            onChange={(e) =>
                                handleUserInfoChange(
                                    'designation',
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className="settings-my-profile-education-degree">
                        <span>Starting Year</span>
                        <input
                            type="text"
                            placeholder="Eg .   2011"
                            maxLength={4}
                            defaultValue={new Date(
                                userInfo['years_of_professional_experience']
                            ).getFullYear()}
                            onChange={(e) => {
                                if (
                                    e.target.value.length < 4 ||
                                    e.target.value.length > 4
                                ) {
                                    return
                                }
                                handleUserInfoChange(
                                    'journey_start_date',
                                    new Date(e.target.value).toISOString()
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserExperience
