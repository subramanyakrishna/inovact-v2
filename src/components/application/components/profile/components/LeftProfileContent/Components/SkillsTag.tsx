import { useState } from 'react'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'

function SkillsTag(props: any) {
    const [showDropDown, setShowDropDown] = useState(false)
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    const [state, setState] = useState<any>(props.skills)
    const [skill, setSkill] = useState<string>()
    const onPressEnter = () => {
        setState([...state, skill])
        setSkill('')
    }
    return (
        <div className="skill-tag">
            <p className="skill-tag-heading">
                <span>{props.heading}</span>
                <span onClick={toggleDropDown}>
                    {showDropDown ? (
                        <KeyboardArrowUpRounded fontSize="small" />
                    ) : (
                        <KeyboardArrowDownRounded fontSize="small" />
                    )}
                </span>
            </p>
            <p className="skill-tag-skillno">{props.skillNo} skill updated</p>
            <div className="skill-tag-skills">
                {showDropDown &&
                    state.map((skill: any, i: number) => {
                        return (
                            <span key={i} className="skill-tag-each-skill">
                                {skill}
                            </span>
                        )
                    })}
                {showDropDown && (
                    <div className="settings-my-profile-area-of-interests-select">
                        <input
                            style={{ width: '90%' }}
                            onChange={(e) => setSkill(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode == 13) {
                                    onPressEnter()
                                }
                            }}
                            placeholder={'Eg:Kotlin'}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default SkillsTag
