import React from 'react'

function SkillTags(props: any) {
    return (
        <div className="skills-tag">
            <label>{props.skill}</label>
            <button onClick={props.removeSkill?.bind(null, props.skill)} >&times;</button>
        </div>
    )
}

export default SkillTags;
