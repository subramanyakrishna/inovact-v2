import { useEffect, useState } from 'react'
import Skills from './Skills'
import AreaOfInterests from './AreaOfInterests'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import { useSelector } from 'react-redux'
import { mapApiDataToUiData } from 'components/application/components/settings/components/YourProfile/components/UserSkills'

function SkillsAndInterests() {
    const user_skills = useSelector((state: any) => state.otherUser.user_skills)
    const [showSkills, setShowSkills] = useState(true)
    const [skillsUIData, setSkillsUIData] = useState<any>([])
    const toggleShowSkills = () => {
        setShowSkills(!showSkills)
    }
    const showSkillsHandler = () => {
        setShowSkills(true)
    }
    const showInterestsHandler = () => {
        setShowSkills(false)
    }
    useEffect(() => {
        const skillsUIMappedData = mapApiDataToUiData(user_skills)
        setSkillsUIData(skillsUIMappedData)
    }, [])
    return (
        <div className="dashboard-main">
            <div className="skills-and-interests">
                {showSkills ? (
                    <div className="skills-and-interests-heading">
                        <p>Skills</p>
                    </div>
                ) : (
                    <div className="skills-and-interests-heading">
                        <p>Area of Interest</p>
                    </div>
                )}
                <div className="skills-and-interests-addbtn"></div>

                <div>
                    {showSkills && (
                        <div className="skills-and-interests-container">
                            <div className="skill-tag-container">
                                <Skills data={skillsUIData} />
                            </div>
                            <div>
                                <span
                                    onClick={toggleShowSkills}
                                    className="skills-and-interests-switch-right"
                                >
                                    <ArrowForwardIosRounded fontSize="medium" />
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
                                    <ArrowBackIosRounded fontSize="medium" />
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
                            style={{
                                backgroundColor: showSkills
                                    ? '#02bd63'
                                    : '#ffffff',
                            }}
                            onClick={showSkillsHandler}
                        ></button>
                        <button
                            style={{
                                backgroundColor: !showSkills
                                    ? '#02bd63'
                                    : '#ffffff',
                            }}
                            onClick={showInterestsHandler}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsAndInterests
