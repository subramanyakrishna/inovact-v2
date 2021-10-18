import React, {useEffect, useState} from 'react'
import SkillTags from './SkillTags';
import TeamNameDescription from './TeamNameDescription';
function ModalPart1(props: any) {
    
    const [skillsNeeded, setSkillsNeeded] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState("");
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

            <TeamNameDescription/>
            
            <div className="modal_part_one-tags">
                <label>Tags covered in your project</label>
                <div className="modal_part_one-tags-taginput">
                    <input type="text" placeholder="Type out the skills used" value={currentSkill} onChange={handleChangeInput}/>
                    <button onClick={addSkill} className="modal_part_one-tags-tagbtn">+Add Tag</button>
                </div>
                <div className="modal_part_one-tags-all">
                    {
                        skillsNeeded.map((skill,id)=>{
                            return (<SkillTags skill={skill} id={id} removeSkill={removeSkill}/>);
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ModalPart1;
