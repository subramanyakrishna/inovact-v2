import React from 'react'

type Props = {
    tag: string
    id: number
    removeTag: (tag: number) => void
}

function SkillTags(props: any) {
    return (
        <div className="skills-tag">
            <label>{props.skill}</label>
            <button onClick={() => props.removeTag(props.id)}>&times;</button>
        </div>
    )
}

export default SkillTags
