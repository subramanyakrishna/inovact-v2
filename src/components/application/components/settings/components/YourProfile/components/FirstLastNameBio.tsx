import React from 'react'

function FirstLastNameBio({ handleUserInfoChange, userInfo }: any) {
    return (
        <div className="settings-my-profile-details">
            <div>
                <div className="settings-my-profile-details-name">
                    <span>First Name</span>
                    <input
                        type="text"
                        placeholder={userInfo.first_name}
                        onChange={(event) =>
                            handleUserInfoChange(
                                'first-name',
                                event.target.value
                            )
                        }
                    />
                </div>
                <div className="settings-my-profile-details-name">
                    <span>Last Name</span>
                    <input
                        type="text"
                        placeholder={userInfo.last_name}
                        onChange={(event) =>
                            handleUserInfoChange(
                                'last-name',
                                event.target.value
                            )
                        }
                    />
                </div>
            </div>
            <div className="settings-my-profile-details-bio">
                <span>Bio</span>
                <textarea
                    placeholder={userInfo.bio}
                    onChange={(event) =>
                        handleUserInfoChange('bio', event.target.value)
                    }
                />
            </div>
        </div>
    )
}

export default FirstLastNameBio
