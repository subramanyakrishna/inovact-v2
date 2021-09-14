import React from 'react'

function SkillTags(props: any) {
    return (
        <div className="skills-tag">
            <label>{props.skill}</label>
            <button>&times;</button>
        </div>
    )
}

export default SkillTags;
