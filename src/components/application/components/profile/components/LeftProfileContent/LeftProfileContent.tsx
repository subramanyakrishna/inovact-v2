import React from 'react'
import BioDescription from './Components/BioDescription';
import DashboardContent from './Components/DashboardContent';
import SkillsAndInterests from './Components/SkillsAndInterests';
import TeamsPartOf from './Components/TeamsPartOf';

function LeftProfileContent() {
    return (
        <div className="left_profile_content">
            <DashboardContent/>
            <BioDescription/>
            <SkillsAndInterests/>
            <TeamsPartOf/>
        </div>
    )
}

export default LeftProfileContent;
