import React from 'react'
import { useSelector } from 'react-redux'

function UserExperience({ handleUserInfoChange }: any) {
    const userInfo = useSelector((state: any) => state.userInfo)
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
                        value={userInfo['organization']}
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
                            value={userInfo['journey_start_date']}
                            onChange={(e) =>
                                handleUserInfoChange(
                                    'journey_start_date',
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserExperience
