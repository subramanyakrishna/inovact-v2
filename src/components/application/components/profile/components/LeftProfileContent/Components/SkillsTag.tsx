import { useState } from 'react'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'
import { handleUserInfoChange } from 'StateUpdateHelper'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

function SkillsTag(props: any) {
    const skillInputField = useRef<any>()
    const [showDropDown, setShowDropDown] = useState(false)
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    const user_skills = useSelector((state: any) => state.userInfo.user_skills)
    const [matchedRes, setMatchedRes] = useState<any>([])
    const [state, setState] = useState<any>(props.skills)
    const isSkillAlreadyPresent = (user_skills: any, skill: any): boolean => {
        return user_skills.some(
            (curr_skill: any) => curr_skill.skill.id === skill.id
        )
    }
    const onPressEnter = () => {
        if (matchedRes.length) {
            setMatchedRes([])
            skillInputField.current.value = ''
            if (isSkillAlreadyPresent(user_skills, matchedRes[0])) return
            setState([...state, matchedRes[0]])
            handleUserInfoChange('user_skills', [
                ...user_skills,
                { skill: matchedRes[0], level: props.heading },
            ])
        }
    }
    const onSkillSelect = (skill: any) => {
        setMatchedRes([])
        skillInputField.current.value = ''

        if (isSkillAlreadyPresent(user_skills, skill)) return

        handleUserInfoChange('user_skills', [
            ...user_skills,
            { skill: skill, level: props.heading },
        ])
        setState([...state, skill])
    }
    const onInputChange = (input: string) => {
        if (input === '') {
            setMatchedRes([])
            return
        }
        const pattern = new RegExp(input, 'i')
        const matchedSkills = props.allSkillsFromApi.filter(
            (skill: any) => skill.name.match(pattern) !== null
        )
        setMatchedRes(matchedSkills)
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
            <p className="skill-tag-skillno">{state.length} skill updated</p>
            <div className="skill-tag-skills">
                {showDropDown &&
                    state.map((skill: any) => {
                        return (
                            <span
                                key={skill.id}
                                className="skill-tag-each-skill"
                                style={{
                                    backgroundColor: 'lightgrey',
                                    borderRadius: '10px',
                                    margin: '4px',
                                    padding: '3px',
                                    paddingLeft: '6px',
                                }}
                            >
                                {skill.name}
                            </span>
                        )
                    })}
                {showDropDown && (
                    <div className="settings-my-profile-area-of-interests-select">
                        <input
                            style={{ width: '90%', marginLeft: '6px' }}
                            onChange={(e) => onInputChange(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode == 13) {
                                    onPressEnter()
                                }
                            }}
                            ref={skillInputField}
                            placeholder={'Eg:Kotlin'}
                        />
                        {
                            <div
                                style={{
                                    position: 'relative',
                                    border: `${
                                        matchedRes.length ? '1' : '0'
                                    }px solid lightgray`,
                                }}
                            >
                                <div>
                                    {matchedRes.map((skill: any) => {
                                        return (
                                            <span
                                                key={skill.i}
                                                onClick={() => {
                                                    onSkillSelect(skill)
                                                }}
                                            >
                                                {skill.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}
export default SkillsTag
