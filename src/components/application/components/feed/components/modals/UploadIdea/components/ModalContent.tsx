import React, {useRef, useState} from 'react'
import SkillTags from '../../UploadProject/components/SkillTags';
import SwitchSlider from '../../UploadProject/components/SwitchSlider';
import RolesLookingFor from "../../UploadProject/components/RolesLookingFor";
import AddRolesLookingFor from '../../UploadProject/components/AddRolesLookingFor';
import { handleAddIdeaChange, handleAddProjectChange } from 'StateUpdateHelper';
import { useSelector } from 'react-redux';
import { imageUploader } from 'imageUpload/imageUploader';
import ImageTag from '../../UploadProject/components/ImageTag';


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
        // setCurrentTag(e.target.value);
        const value = e.target.value;
        if(value===""){
            setSearchedTags([]);
            setCurrentTag(value);
        }else{
            setSearchedTags(allTags.filter((tag: any)=>tag.name.includes(value)).slice(0,4));
            setCurrentTag(value);
        }
    }
    const addTag = (skill: any)=>{
        setCurrentTag("");
        if(!(currentTag==="") && !allIdeaTags.includes(skill)){
            setAllIdeaTags(([...allIdeaTags, skill]));
            setCurrentTag("");
        }
        setSearchedTags([]);
    }
    const removeTheRole = (id:any)=>{
        setAllRolesNeeded(allRolesNeeded.filter((ele:any,idx: any)=> idx!==id));
    }
    const removeSkill = (id: any)=>{
        setAllIdeaTags(allIdeaTags.filter((ele: any, idx: any)=>idx!==id));
    }
    const loadFile = async(e: any)=>{
        imageUploader(e.target.files).then((data: any)=>{
            handleAddIdeaChange("documents", data);
        });
    }
    const allTags = useSelector((state: any)=> state.allTags);
    const userTeams = useSelector((state: any)=>state.teams.teams);
    // const addIdea = useSelector((state: any)=> state.addIdea);
    const [searchedTags, setSearchedTags] = useState<any>([]);
    const teamMentionInput: any = useRef<HTMLInputElement>();
    const [teamSearched, setTeamSearched] = useState<any[]>([]);
    const searchTeam = (e: any)=>{
        const value = e.target.value;
        if(value===""){
            setTeamSearched([]);
            return;
        } 
        setTeamSearched(userTeams.filter((team: any)=>team.name.includes(e.target.value)));
    }
    const addTeamId = (id: any, name: any)=>{
        handleAddIdeaChange("team_id",id);
        teamMentionInput.current.value = name;
        setTeamSearched([]);
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
                    <input type="file" id="upload-media-input" hidden multiple onChange={loadFile}/>
                    <label className="upload-media-btn" htmlFor="upload-media-input" >Upload Media</label>
                </div>
                {
                    addIdea.documents.map((file: any)=>{
                        return <ImageTag name={file.name}/>
                    })
                }
            </div>
            <div className="modal_part_one-tags">
                <label>Tags covered in your project</label>
                <div className="modal_part_one-tags-taginput">
                    <input type="text" placeholder="Type out the skills used" onChange={handleCurrentTag} value={currentTag}/>
                    {/* <button onClick={addTag}>+Add Tag</button> */}
                    <div className="modal_part_one-tags-dropdown">
                            {
                                searchedTags.map((tag: any)=><span onClick={(e)=>{
                                    setCurrentTag(tag.name);
                                    addTag(tag.name);
                                    handleAddIdeaChange("idea_tags",Array.from(new Set([...addIdea.idea_tags, tag.id])));
                                }}>{tag.name}</span>)
                            }
                    </div>
                </div>
                <div className="modal_part_one-tags-all">
                    {
                        allIdeaTags.map((skill: any, index: any)=>{
                            const id = allTags.filter((tag: any)=>tag.name===skill)[0].id;
                            return <SkillTags type="idea" skill={skill} index={index} id={id} removeSkill = {removeSkill}/>
                        })
                    }
                </div>
            </div>
            <div className="modal_part_two-team-worked">
                <label>Choose the team that worked on the project</label>
                <div className="modal_part_two-team-worked-input">
                    <input type="text" placeholder="Start typing team name" onChange={searchTeam} ref={teamMentionInput}/>
                    <div className="modal_part_two-team-worked-dropdown">
                        {
                            teamSearched.map((team: any)=>{
                                return <span onClick={addTeamId.bind(null,team.id, team.name)}>{team.name}</span>
                            })
                        }
                    </div>
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
