import React from 'react'
import SkillTags from '../../UploadProject/components/SkillTags';
import Switch_slider from '../../UploadProject/components/Switch_slider';

function ModalContent() {
    return (
        <div className="modal_part_one">
            <div className="modal_part_one-title">
                <label >Project Title</label>
                <input type="text" placeholder="Give your project a suitable title"/>
            </div>
            <div className="modal_part_one-description">
                <label >Project Description</label>
                <textarea placeholder="Describe your project"/>
                <div>
                    <input type="file" id="upload-media-input" hidden/>
                    <label className="upload-media-btn" htmlFor="upload-media-input">Upload Media</label>
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
            <div className="modal_part_two">
                <div className="modal_part_two-member-mentor">
                    <div>
                        <label>Looking for team members</label>
                        <Switch_slider/>
                    </div>
                    <div>
                        <label>Looking for a mentor</label>
                        <Switch_slider/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContent;
