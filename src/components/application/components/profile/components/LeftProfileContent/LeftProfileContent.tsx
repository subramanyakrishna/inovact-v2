import React from 'react'
import BioDescription from './Components/BioDescription';
import DashboardContent from './Components/DashboardContent';
import SkillsAndInterests from './Components/SkillsAndInterests';
import TeamsPartOf from './Components/TeamsPartOf';

function LeftProfileContent(props: any) {
    return (
        <div className="left_profile_content">
            <DashboardContent/>
            <BioDescription viewEditBio={props.viewEditBio}/>
            <SkillsAndInterests/>
            <TeamsPartOf createTeam={props.createTeam}/>
        </div>
    )
}

export default LeftProfileContent;
