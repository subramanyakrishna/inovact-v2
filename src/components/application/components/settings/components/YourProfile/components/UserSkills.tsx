import SkillsTag from 'components/application/components/profile/components/LeftProfileContent/Components/SkillsTag'
import React from 'react'
import Skills from '../../../../profile/components/LeftProfileContent/Components/Skills'
function UserSkills() {
    const data = [
        {
            heading: 'Beginner',
            skillNo: 3,
            allSkills: ['Spring', 'Blockchain', 'C'],
        },
        {
            heading: 'Intermediate',
            skillNo: 3,
            allSkills: ['ExpressJs'],
        },
        {
            heading: 'Proficient',
            skillNo: 3,
            allSkills: ['ReactJs', 'Redux'],
        },
        {
            heading: 'Advanced',
            skillNo: 3,
            allSkills: ['Java', 'C++', 'C'],
        },
    ]

    return (
        <div>
            <span className="settings-my-profile-skills-heading">Skills</span>
            <div className="settings-my-profile-skills">
                {data.map((skills: any, i: number) => {
                    const { heading, skillNo, allSkills } = skills
                    return (
                        <SkillsTag
                            key={i}
                            heading={heading}
                            skillNo={skillNo}
                            skills={allSkills}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default UserSkills
