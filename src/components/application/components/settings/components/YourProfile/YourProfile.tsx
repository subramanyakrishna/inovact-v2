import React from 'react'
import ProfileImage from './components/ProfileImage'
import FirstLastNameBio from './components/FirstLastNameBio'
import AreasOfInterests from './components/AreasOfInterests'
import UserSkills from './components/UserSkills'
import UserEducation from './components/UserEducation'
import UserExperience from './components/UserExperience'
import DeleteAccount from './components/DeleteAccount'
function YourProfile(props: any) {
    return (
        <div className="settings-my-profile-main">
            <ProfileImage handleUserInfoChange={props.handleUserInfoChange} />
            <FirstLastNameBio
                handleUserInfoChange={props.handleUserInfoChange}
            />
            <AreasOfInterests
                handleUserInfoChange={props.handleUserInfoChange}
            />
            <UserSkills />
            <UserExperience handleUserInfoChange={props.handleUserInfoChange} />
            <UserEducation handleUserInfoChange={props.handleUserInfoChange} />
            <DeleteAccount deleteAccount={props.deleteAccount} />
        </div>
    )
}

export default YourProfile
