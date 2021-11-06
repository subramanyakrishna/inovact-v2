import SkillsTag from './SkillsTag'

function Skills(props: any) {
    return (
        <div>
            {props.data.map((skills: any, index: number) => {
                const { heading, allSkills } = skills
                return (
                    <SkillsTag
                        key={index}
                        heading={heading}
                        skillNo={allSkills.length}
                        skills={allSkills}
                    />
                )
            })}
        </div>
    )
}
export default Skills
