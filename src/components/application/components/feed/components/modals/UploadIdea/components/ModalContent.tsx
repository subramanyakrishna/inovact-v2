import React, {useState} from 'react'
import SkillTags from '../../UploadProject/components/SkillTags';
import Switch_slider from '../../UploadProject/components/Switch_slider';
import RolesLookingFor from "../../UploadProject/components/RolesLookingFor";
import AddRolesLookingFor from '../../UploadProject/components/AddRolesLookingFor';


function ModalContent() {
    const [teamMembersNeeded, setTeamMembersNeeded] = useState(false);
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);
    const toggleTeamMemberNeeded = ()=>{
        setTeamMembersNeeded(!teamMembersNeeded);
    }
    const addAnotherRole = (role:any, tags:any)=>{
        if(role==="" && tags.length===0){
            return;
        }
        setAllRolesNeeded([...allRolesNeeded, {role: role, skillNeeded: tags}]);
    }  
    const removeTheRole = (id:any)=>{
        setAllRolesNeeded(allRolesNeeded.filter((ele:any,idx: any)=> idx!==id));
    }

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
                <div className="modal_part_one-tags-all">
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
                        <div onClick={toggleTeamMemberNeeded}>
                            <Switch_slider/>
                        </div>
                    </div>
                    <div>
                        <label>Looking for a mentor</label>
                        <Switch_slider/>
                    </div>
                </div>

            </div>
            {
                    teamMembersNeeded && 
                    <div >
                        <div>
                            <div className="modal_part_two-roles-looking-for">
                            <span>What roles are you looking for?</span>
                            {
                                allRolesNeeded.map((ele:any, index:any)=>{
                                    console.log(allRolesNeeded);
                                    return <RolesLookingFor role={ele.role} skillSelected={ele.skillNeeded} removeTheRole={removeTheRole} id={index} />
                                    }
                                )
                            }
                            <AddRolesLookingFor addAnotherRole={addAnotherRole}/>
                            </div>
                        </div>
                    </div>
                    
                    
            }
        </div>
    )
}

export default ModalContent;
