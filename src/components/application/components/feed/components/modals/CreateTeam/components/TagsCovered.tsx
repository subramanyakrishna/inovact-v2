import React, { useState } from 'react';
import SkillTags from '../../UploadProject/components/SkillTags';

function TagsCovered() {
    const [currentSkill, setCurrentSkill] = useState("");
    const handleChangeInput = (e: any)=>{
        setCurrentSkill(e.target.value)
    }
    const [skillsNeeded, setSkillsNeeded] = useState(["Python", "JavaScript"]);

    const removeSkill = (skill:any)=>{
        setSkillsNeeded(skillsNeeded.filter((ele)=>ele!==skill));
    }
    return (
        <div className="tags-covered">
                <label>Team Tags</label>
                <input type="text" placeholder="Type out the skills used" value={currentSkill} onChange={handleChangeInput}/>
                <div>
                    {
                        skillsNeeded.map((skill)=>{
                            return (<SkillTags skill={skill} removeSkill={removeSkill}/>);
                        })
                    }
                </div>
            </div>
    )
}

export default TagsCovered;
