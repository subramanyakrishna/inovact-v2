import SkillsTag from "./SkillsTag";

function Skills(props: any) {
  return (
    <div>
      {props.data.map((skills: any) => {
        const { heading, skillNo, allSkills } = skills;
        return (
          <SkillsTag heading={heading} skillNo={skillNo} skills={allSkills} />
        );
      })}
    </div>
  );
}
export default Skills;
