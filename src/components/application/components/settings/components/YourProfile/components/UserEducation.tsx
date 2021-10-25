import React from 'react'
import { useSelector } from 'react-redux'

function UserEducation({ handleUserInfoChange, userInfo }: any) {
    return (
        <div className="settings-my-profile-education">
            <span className="settings-my-profile-education-heading">
                Education
            </span>
            <div className="settings-my-profile-education-content">
                <div className="settings-my-profile-education-college">
                    <label>University/College</label>
                    <input
                        type="text"
                        placeholder="University Name"
                        value={userInfo['university']}
                        onChange={(e) =>
                            handleUserInfoChange('university', e.target.value)
                        }
                    />
                </div>
                <div className="settings-my-profile-education-degree-details">
                    <div className="settings-my-profile-education-degree">
                        <span>Degree</span>
                        <input
                            type="text"
                            placeholder="Eg .   B.E"
                            value={userInfo['degree']}
                            onChange={(e) =>
                                handleUserInfoChange('degree', e.target.value)
                            }
                        />
                    </div>
                    <div className="settings-my-profile-education-degree">
                        <span>Year Of Graduation</span>
                        <input
                            type="text"
                            placeholder="Eg .   2011"
                            defaultValue={new Date(
                                userInfo['graduation_year']
                            ).getFullYear()}
                            onChange={(e) => {
                                if (
                                    e.target.value.length < 4 ||
                                    e.target.value.length > 4
                                ) {
                                    return
                                }
                                handleUserInfoChange(
                                    'graduation-year',
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

export default UserEducation
