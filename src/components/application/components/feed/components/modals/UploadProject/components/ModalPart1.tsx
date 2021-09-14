import React, {useEffect, useState} from 'react'
import SkillTags from './SkillTags';
import Switch_slider from './Switch_slider';

function ModalPart1(props: any) {
    
    const [skillsNeeded, setSkillsNeeded] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const removeSkill = (skill:any)=>{
        setSkillsNeeded(skillsNeeded.filter((ele)=>ele!==skill));
    }
    /* //Need to work on this
    const addSkill = (e:any)=>{
        if(e.key=="Enter"){
            if(!skillsNeeded.includes(currentSkill)){
                setSkillsNeeded([...skillsNeeded, currentSkill]);
                setCurrentSkill("");
            }
        }
    }
    const handleChangeInput = (e:any)=>{
        const value = e.target.value;
        setCurrentSkill(value);
    }
    useEffect(()=>{
        document.querySelector(".modal_part_one-tags input")?.addEventListener("keydown",addSkill);
    });

    */
    return (
        <div className="modal_part_one">
            <div className="modal_part_one-title">
                <label >Project Title</label>
                <input type="text" placeholder="Give your project a suitable title"/>
            </div>
            <div className="modal_part_one-description">
                <label >Project Description</label>
                <input type="text" placeholder="Describe your project"/>
                <div>
                    <button>Upload Media</button>
                </div>
            </div>
            <div className="modal_part_one-tags">
                <label>Tags covered in your project</label>
                <input type="text" placeholder="Type out the skills used" value={currentSkill}/>
                <div>
                    {
                        skillsNeeded.map((skill)=>{
                            return (<SkillTags skill={skill} removeSkill={removeSkill}/>);
                        })
                    }
                </div>
            </div>
            <div className="modal_part_one-completed">
                <label>Completed Project</label>
                <Switch_slider projectCompletion={props.projectCompletion}/>
            </div>
        </div>
    )
}

export default ModalPart1;
