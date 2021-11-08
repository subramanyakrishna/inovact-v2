import React from 'react'
import { useSelector } from 'react-redux'
import { handleAddIdeaChange, handleAddProjectChange } from 'StateUpdateHelper'

function SkillTags(props: any) {
    const postTags = useSelector((state: any) => {
        if (props.type === 'project') {
            return state.addProject.project_tags
        } else {
            return state.addIdea.idea_tags
        }
    })
    const removeTheSkill = () => {
        props.removeSkill(props.index)
        if (props.type === 'project') {
            handleAddProjectChange(
                `${props.type}_tags`,
                postTags.filter((tag: any) => tag !== props.id)
            )
        } else {
            handleAddIdeaChange(
                `${props.type}_tags`,
                postTags.filter((tag: any) => tag !== props.id)
            )
        }
    }
    return (
        <div className="skills-tag">
            <label>{props.skill}</label>
            <button onClick={removeTheSkill}>&times;</button>
        </div>
    )
}

export default SkillTags
