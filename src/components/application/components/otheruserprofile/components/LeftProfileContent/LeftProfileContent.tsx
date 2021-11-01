import React from 'react'
import BioDescription from './Components/BioDescription';
import DashboardContent from './Components/DashboardContent';
import SkillsAndInterests from './Components/SkillsAndInterests';
import TeamsPartOf from './Components/TeamsPartOf';

function LeftProfileContent(props: any) {
    return (
        <div className="left_profile_content">
            <DashboardContent postsCount={props.postsCount} connectionsCount={props.connectionsCount}/>
            <BioDescription viewEditBio={props.viewEditBio} userInfo = {props.userInfo}/>
            <SkillsAndInterests/>
            <TeamsPartOf/>
        </div>
    )
}

export default LeftProfileContent;
