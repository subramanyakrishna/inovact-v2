import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { handleAddProjectChange, handleUserInfoChange } from 'StateUpdateHelper'
import SkillTags from './SkillTags'
import TeamNameDescription from './TeamNameDescription'
function ModalPart1(props: any) {
    const [skillsNeeded, setSkillsNeeded] = useState<any[]>([])
    const [currentSkill, setCurrentSkill] = useState('')
    const removeSkill = (index: any) => {
        setSkillsNeeded(skillsNeeded.filter((ele, idx) => idx !== index))
        // handleAddProjectChange("project_tags", addProject.project_tags.filter((tag: any)=>{return tag!==id}));
    }
    const addSkill = (skill: any) => {
        if (!skillsNeeded.includes(currentSkill)) {
            setSkillsNeeded([...skillsNeeded, skill])
            setCurrentSkill('')
        }
        setSearchedTags([])
    }
    const handleChangeInput = (e: any) => {
        const value = e.target.value
        if (value === '') {
            setSearchedTags([])
            setCurrentSkill(value)
        } else {
            setSearchedTags(
                allTags
                    .filter((tag: any) => tag.name.includes(value))
                    .slice(0, 4)
            )
            setCurrentSkill(value)
        }
    }
    const allTags = useSelector((state: any) => state.allTags)
    const addProject = useSelector((state: any) => state.addProject)
    const [searchedTags, setSearchedTags] = useState<any>([])

    return (
        <div className="modal_part_one">
            {/* <div className="modal_part_one-title">
                <label >Project Title</label>
                <input type="text" placeholder="Give your project a suitable title"/>
            </div>
            <div className="modal_part_one-description">
                <label >Project Description</label>
                <textarea placeholder="Describe your project"/>
                <div>
                    <button>Upload Media</button>
                </div>
            </div> */}

            <TeamNameDescription />

            <div className="modal_part_one-tags">
                <label>Tags covered in your project</label>
                <div className="modal_part_one-tags-taginput">
                    <input
                        type="text"
                        placeholder="Type out the skills used"
                        value={currentSkill}
                        onChange={handleChangeInput}
                    />
                    <div className="modal_part_one-tags-dropdown">
                        {searchedTags.map((tag: any) => (
                            <span
                                onClick={(e) => {
                                    setCurrentSkill(tag.name)
                                    addSkill(tag.name)
                                    handleAddProjectChange(
                                        'project_tags',
                                        Array.from(
                                            new Set([
                                                ...addProject.project_tags,
                                                tag.id,
                                            ])
                                        )
                                    )
                                }}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                    {/* <button onClick={addSkill} className="modal_part_one-tags-tagbtn">+Add Tag</button> */}
                </div>
                <div className="modal_part_one-tags-all">
                    {skillsNeeded.map((skill, index) => {
                        const id = allTags.filter(
                            (tag: any) => tag.name === skill
                        )[0].id
                        return (
                            <SkillTags
                                type="project"
                                skill={skill}
                                index={index}
                                id={id}
                                removeSkill={removeSkill}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ModalPart1
