import React, { useState } from 'react';
import SkillTags from '../../UploadProject/components/SkillTags';

function TagsCovered() {
    const [currentSkill, setCurrentSkill] = useState("");  
    const [skillsNeeded, setSkillsNeeded] = useState<string[]>([]);

    const removeSkill = (id:any)=>{
        setSkillsNeeded(skillsNeeded.filter((ele,idx)=>idx!==id));
    }
   const addSkill = (e:any)=>{
       if(!skillsNeeded.includes(currentSkill)){
            setSkillsNeeded([...skillsNeeded, currentSkill]);
            setCurrentSkill("");
       }
   }
    const handleChangeInput = (e:any)=>{
        const value = e.target.value;
        setCurrentSkill(value);
    }
  
    return (
        <div className="tags-covered">
                <label>Team Tags</label>
                <input type="text" placeholder="Type out the skills used" value={currentSkill} onChange={handleChangeInput}/>
                 <button onClick={addSkill} className="upload-media-btn">+Add Tag</button>
                <div>
                    {
                        skillsNeeded.map((skill,id)=>{
                            return (<SkillTags skill={skill} id={id} removeSkill={removeSkill}/>);
                        })
                    }
                </div>
                
            </div>
    )
}

export default TagsCovered;
