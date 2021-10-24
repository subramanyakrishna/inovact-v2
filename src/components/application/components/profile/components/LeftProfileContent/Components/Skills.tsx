import SkillsTag from './SkillsTag'

function Skills(props: any) {
    return (
        <div>
            {props.data.map((skills: any, i: number) => {
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
    )
}
export default Skills
