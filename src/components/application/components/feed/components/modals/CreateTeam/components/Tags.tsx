import React from 'react'

type Props = {
    tag: string
    id: number
    removeTag: (tag: number) => void
}

function SkillTags({ tag, removeTag, id }: Props) {
    return (
        <div className="skills-tag">
            <label>{tag}</label>
            <button onClick={() => removeTag(id)}>&times;</button>
        </div>
    )
}

export default SkillTags
