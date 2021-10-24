import { useState } from "react";
import KeyboardArrowUpRounded from "@material-ui/icons/KeyboardArrowUpRounded";
import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded";

function SkillsTag(props: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div className="skill-tag">
      <p className="skill-tag-heading">
        <span>{props.heading}</span>
        <span onClick={toggleDropDown}>{showDropDown ? <KeyboardArrowUpRounded fontSize="small"/> : <KeyboardArrowDownRounded fontSize="small"/>}</span>
      </p>
      <p className="skill-tag-skillno">{props.skillNo} skill updated</p>
      <div className="skill-tag-skills">
        {showDropDown &&
          props.skills.map((skill: any) => {
            return <span className="skill-tag-each-skill">{skill}</span>;
          })}
      </div>
    </div>
  );
}
export default SkillsTag;
