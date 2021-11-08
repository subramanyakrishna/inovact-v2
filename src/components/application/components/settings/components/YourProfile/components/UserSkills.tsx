import { makeApiCall } from 'components/application/components/connections/components/connectionsUtils'
import SkillsTag from 'components/application/components/profile/components/LeftProfileContent/Components/SkillsTag'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
interface skillI {
    id: number
    name: string
}
interface user_skillI {
    skill: skillI
    level: string
}
interface data_modelI {
    heading: string
    allSkills: skillI[]
}
export const mapApiDataToUiData = (user_skills: any) => {
    let data_model: data_modelI[] = [
        {
            heading: 'beginner',
            allSkills: [],
        },
        {
            heading: 'intermediate',
            allSkills: [],
        },
        {
            heading: 'proficient',
            allSkills: [],
        },
        {
            heading: 'advanced',
            allSkills: [],
        },
    ]
    user_skills.forEach((user_skill: user_skillI) => {
        if (user_skill.level === 'beginner')
            data_model[0].allSkills.push(user_skill.skill)
        if (user_skill.level === 'intermediate')
            data_model[1].allSkills.push(user_skill.skill)
        if (user_skill.level === 'proficient')
            data_model[2].allSkills.push(user_skill.skill)
        if (user_skill.level === 'advanced')
            data_model[3].allSkills.push(user_skill.skill)
    })
    return data_model
}

function UserSkills() {
    const user_skills = useSelector((state: any) => state.userInfo.user_skills)
    const [filteredData, setFilteredData] = useState<any>([])
    const [allSkillsFromApi, setAllSkillsFromApi] = useState<any>([])
    useEffect(() => {
        ;(async () => {
            const res = await makeApiCall('get', 'token/skills')
            const skillsFromApi = res.data.data.skills
            setAllSkillsFromApi(skillsFromApi)
        })()
    }, [])
    useEffect(() => {
        const data_model = mapApiDataToUiData(user_skills)
        setFilteredData(data_model)
    }, [])
    return (
        <div>
            <span className="settings-my-profile-skills-heading">Skills</span>
            <div className="setting)s-my-profile-skills">
                {filteredData.map((skills: any, i: number) => {
                    const { heading, skillNo, allSkills } = skills
                    return (
                        <SkillsTag
                            key={i}
                            heading={heading}
                            skills={allSkills}
                            allSkillsFromApi={allSkillsFromApi}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default UserSkills
