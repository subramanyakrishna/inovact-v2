import React from 'react'
import Skills from "../../../../profile/components/LeftProfileContent/Components/Skills";
function UserSkills() {
    const data = [
        {
          heading: "Beginner",
          skillNo: 3,
          allSkills: ["Java", "Blockchain", "C"]
        },
        {
          heading: "Intermediate",
          skillNo: 3,
          allSkills: ["Java", "Blockchain", "C"]
        },
        {
          heading: "Proficient",
          skillNo: 3,
          allSkills: ["Java", "Blockchain", "C"]
        },
        {
          heading: "Advanced",
          skillNo: 3,
          allSkills: ["Java", "Blockchain", "C"]
        }
      ];
    return (
        <div>
            <span className="settings-my-profile-skills-heading">Skills</span>
            <div className="settings-my-profile-skills">
                
                <Skills data={data}/>
            </div>
        </div>
    )
}

export default UserSkills
