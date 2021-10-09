import React from 'react'
import ProfileImage from './components/ProfileImage'
import FirstLastNameBio from './components/FirstLastNameBio'
import AreasOfInterests from './components/AreasOfInterests'
import UserSkills from './components/UserSkills'
import UserEducation from './components/UserEducation'
import UserExperience from './components/UserExperience'
import DeleteAccount from './components/DeleteAccount'
import { useSelector } from 'react-redux'

function YourProfile(props: any) {
    const userInfo = useSelector((state: any) => state.userInfo)
    console.log('your profile', userInfo)
    return (
        <div className="settings-my-profile-main">
            <ProfileImage
                handleUserInfoChange={props.handleUserInfoChange}
                userInfo={userInfo}
            />
            <FirstLastNameBio
                handleUserInfoChange={props.handleUserInfoChange}
                userInfo={userInfo}
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
