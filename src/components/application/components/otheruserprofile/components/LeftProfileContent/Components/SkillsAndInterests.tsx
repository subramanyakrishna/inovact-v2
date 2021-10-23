import { useState } from "react";
import Skills from "./Skills";
import AreaOfInterests from "./AreaOfInterests";
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';
import AddCircleSharp from "@material-ui/icons/AddCircleSharp";

function SkillsAndInterests() {
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
  const [showSkills, setShowSkills] = useState(true);
  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
  };
  const showSkillsHandler = () => {
    setShowSkills(true);
  };
  const showInterestsHandler = () => {
    setShowSkills(false);
  };
  return (
      <div className="dashboard-main">
          <div className="skills-and-interests">
      {showSkills ? (
        <div className="skills-and-interests-heading">
          <p>Skills</p>
        </div>
      ) : (
        <div className="skills-and-interests-heading">
          <p >Area of Interest</p>
        </div>
        
      )}
      <div className="skills-and-interests-addbtn">
        
      </div>
      
      <div>
        {showSkills && (
          <div className="skills-and-interests-container">
            <div className="skill-tag-container">
              <Skills data={data} />
            </div>
            <div>
              <span
                onClick={toggleShowSkills}
                className="skills-and-interests-switch-right"
              >
                <ArrowForwardIosRounded fontSize="medium"/>
                
              </span>
            </div>
          </div>
        )}
        {!showSkills && (
          <div className="skills-and-interests-container">
            <div>
              <span
                onClick={toggleShowSkills}
                className="skills-and-interests-switch-left"
              >
                <ArrowBackIosRounded fontSize="medium"/>
              </span>
            </div>
            <div>
              <AreaOfInterests />
            </div>
          </div>
        )}
        <div className="skills-and-interests-bottom-switch">
          {/* {showSkills && (
            <div>
              <div> </div>
              <div> </div>
            </div>
          )} */}
          <button
            style={{ backgroundColor: showSkills ? "#02bd63" : "#ffffff" }}
            onClick={showSkillsHandler}
          ></button>
          <button
            style={{ backgroundColor: !showSkills ? "#02bd63" : "#ffffff" }}
            onClick={showInterestsHandler}
          ></button>
        </div>
      </div>
    </div>
      </div>
    
  );
}

export default SkillsAndInterests;
