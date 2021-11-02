import makeApiCall from 'components/application/components/settings/makeApiCall'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { mapApiDataToUiData } from '../../../../settings/components/YourProfile/components/UserSkills'
import SkillsTag from './SkillsTag'
function Skills(props: any) {
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
        console.log('user_skills', user_skills)
        const data_model = mapApiDataToUiData(user_skills)

        setFilteredData(data_model)
    }, [])
    return (
        <div>
            {filteredData.map((skills: any, i: number) => {
                const { heading, allSkills } = skills
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
    )
}
export default Skills
