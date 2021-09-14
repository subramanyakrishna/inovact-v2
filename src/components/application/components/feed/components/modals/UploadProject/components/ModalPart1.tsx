import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, {useState} from 'react'
import SkillTags from './SkillTags';
import Switch_slider from './Switch_slider';

function ModalPart1(props: any) {
    
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
                <input type="text" placeholder="Type out the skills used"/>
                <div>
                    <SkillTags skill="OOP"/>
                    <SkillTags skill="C"/>
                    <SkillTags skill="Python"/>
                    <SkillTags skill="Algorithms"/>
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
