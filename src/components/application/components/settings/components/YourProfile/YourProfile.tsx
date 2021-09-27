import React from 'react'
import ProfileImage from './components/ProfileImage';
import FirstLastNameBio from "./components/FirstLastNameBio";
import AreasOfInterests from "./components/AreasOfInterests";
import UserSkills from "./components/UserSkills";
import UserEducation from "./components/UserEducation";
import UserExperience from "./components/UserExperience";
import DeleteAccount from "./components/DeleteAccount";
function YourProfile() {
    
    return (
        <div className="settings-my-profile-main">
            <ProfileImage/>
            <FirstLastNameBio/>
            <AreasOfInterests/>
            <UserSkills/>
            <UserExperience/>
            <UserEducation/>
            <DeleteAccount/>
        </div>
    )
}

export default YourProfile;
