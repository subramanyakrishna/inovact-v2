import React, {useState} from 'react'
import SkillTags from '../../UploadProject/components/SkillTags';
import SwitchSlider from '../../UploadProject/components/SwitchSlider';
import RolesLookingFor from "../../UploadProject/components/RolesLookingFor";
import AddRolesLookingFor from '../../UploadProject/components/AddRolesLookingFor';
import { handleAddIdeaChange } from 'StateUpdateHelper';
import { useSelector } from 'react-redux';


function ModalContent() {
    const [teamMembersNeeded, setTeamMembersNeeded] = useState(false);
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);
    const [currentTag, setCurrentTag] = useState("");
    const [allIdeaTags, setAllIdeaTags] = useState<string[]>([]);
    const [lookingForTeam, setLookingForTeam] = useState(false);
    const addIdea = useSelector((state:any)=>state.addIdea);
    const toggleTeamMemberNeeded = async(e: any)=>{
        setTeamMembersNeeded(!teamMembersNeeded);
        handleAddIdeaChange("looking_for_team", !addIdea.looking_for_team);
    }
    const toggleMentorNeeded = (e:any)=>{
        handleAddIdeaChange("looking_for_mentor", !addIdea.looking_for_mentor);
    }
    const addAnotherRole = (role:any, tags:any)=>{
        if(role==="" && tags.length===0){
            return;
        }
        setAllRolesNeeded([...allRolesNeeded, {role: role, skillNeeded: tags}]);
    }  
    const handleCurrentTag = (e: any)=>{
        setCurrentTag(e.target.value);
    }
    const addTag = ()=>{
        setCurrentTag("");
        setAllIdeaTags([...allIdeaTags, currentTag]);
    }
    const removeTheRole = (id:any)=>{
        setAllRolesNeeded(allRolesNeeded.filter((ele:any,idx: any)=> idx!==id));
    }
    const removeSkill = (id: any)=>{
        setAllIdeaTags(allIdeaTags.filter((ele: any, idx: any)=>idx!==id));
    }
    return (
        <div className="modal_part_one">
            <div className="modal_part_one-title">
                <label >Idea Title</label>
                <input type="text" placeholder="Give your project a suitable title" onChange={(e: any)=> handleAddIdeaChange("title", e.target.value)}/>
            </div>
            <div className="modal_part_one-description">
                <label >Idea Description</label>
                <textarea placeholder="Describe your project" onChange={(e: any)=> handleAddIdeaChange("description", e.target.value)}/>
                <div>
                    <input type="file" id="upload-media-input" hidden/>
                    <label className="upload-media-btn" htmlFor="upload-media-input">Upload Media</label>
                </div>
            </div>
            <div className="modal_part_one-tags">
                <label>Tags covered in your project</label>
                <div>
                    <input type="text" placeholder="Type out the skills used" onChange={handleCurrentTag}/>
                    <button onClick={addTag}>+Add Tag</button>
                </div>
                <div className="modal_part_one-tags-all">
                    {
                        allIdeaTags.map((skill: any, id: any)=><SkillTags skill={skill} id={id} removeSkill = {removeSkill}/>)
                    }
                </div>
            </div>
            <div className="modal_part_two">
                <div className="modal_part_two-member-mentor">
                    <div>
                        <label>Looking for team members</label>
                        <div onClick={toggleTeamMemberNeeded} >
                            <SwitchSlider/>
                        </div>
                    </div>
                    <div>
                        <label>Looking for a mentor</label>
                        <div onClick={toggleMentorNeeded}> 
                            <SwitchSlider/>
                        </div>
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
