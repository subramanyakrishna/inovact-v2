import React, {  useRef, useState } from 'react'
import AddRolesLookingFor from './AddRolesLookingFor';
import RolesLookingFor from './RolesLookingFor';
import SwitchSlider from './SwitchSlider';
import { handleAddProjectChange, handleUserInfoChange } from 'StateUpdateHelper';
import { useSelector } from 'react-redux';
import SearchedPeople from './SearchedPeople';
import MentionsTag from './MentionsTag';
function ModalPart2(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);
    const [teamMembersNeeded, setTeamMembersNeeded] = useState(false);
    const [teamNotOnInovact, setTeamNotOnInovact] = useState(false);
    const [isIndividualProject, setIsIndividualProject] = useState(false);
    const addProject = useSelector((state: any)=> state.addProject);
    const addAnotherRole = (role:any, tags:any)=>{
        if(role==="" && tags.length===0) return;
        let found=false;
        allRolesNeeded.forEach((ele: any)=>{
            if(ele.role.toLowerCase() === role.toLowerCase()){
                found=true;
            }
        })
        if(found) return;
        setAllRolesNeeded([...allRolesNeeded, {role: role, skillNeeded: tags}]);
    }   
    const removeTheRole = (id:any)=>{
        setAllRolesNeeded(allRolesNeeded.filter((ele:any,idx: any)=> idx!==id));
    }

    const toggleTeamMemberNeeded = ()=>{
        setTeamMembersNeeded(!teamMembersNeeded);
        // handleAddProjectChange("")
    }
    const toggleTeamNotOnInovact = ()=>{
        setTeamNotOnInovact(!teamNotOnInovact);
    }
    const toggleIsIndividualProject =()=>{
        setIsIndividualProject(!isIndividualProject);
    }
    const changeProjectStatus = (e: any)=>{
        console.log(e.target.getAttribute("data-value"));
        handleAddProjectChange("project_status",e.target.getAttribute("data-value"));
    }
    const peopleYouMayKnow = useSelector((state: any)=>{
        return state.peopleYouMayKnow;
    });
    const [searchedPeople, setSearchedPeople] = useState<any[]>([]);
    const searchUsernames = (e: any)=>{
        const value = e.target.value;
        if(value===""){
            setSearchedPeople([]);
            return;
        }
        setSearchedPeople([...peopleYouMayKnow.filter((ppl: any)=>ppl.user_name.includes(value)).slice(0,4)]);
    }
    const [mentionsOfProject, setMentionsOfProject] = useState<any[]>([]);
    const addMentions = (mention: any)=>{
        mentionInput.current.value="";
        setSearchedPeople([]);
        setMentionsOfProject([...mentionsOfProject.filter((men: any)=>{
            return men.user_name!==mention.user_name;
        }), mention]);
        handleAddProjectChange("mentions", [...addProject.mentions, mention.id])
    }
    // const [currentMention, setCurrentMention]
    const userTeams = useSelector((state: any)=>state.teams.teams);
    const [teamSearched, setTeamSearched] = useState<any[]>([]);
    const teamMentionInput: any = useRef<HTMLInputElement>();
    const searchTeam = (e: any)=>{
        const value = e.target.value;
        if(value===""){
            setTeamSearched([]);
            return;
        } 
        setTeamSearched(userTeams.filter((team: any)=>team.name.includes(e.target.value)));
    }
    const addTeamId = (id: any, name: any)=>{
        handleAddProjectChange("team_id",id);
        teamMentionInput.current.value = name;
        setTeamSearched([]);
    }
    const mentionInput: any = useRef();
    return (
        <div className="modal_part_two">
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
                <div className="modal_part_two-team-worked-team-members">
                    <div onClick={(e)=>{
                        if(isIndividualProject) handleAddProjectChange("team_id",null);
                        teamMentionInput.current.value = "";
                    }}>
                        <input type="checkbox" onClick={toggleIsIndividualProject} id="individual"/>
                        <label htmlFor="individual">Individual Project</label>
                    </div>
                    {
                        !isIndividualProject &&
                        <div >
                            <input type="checkbox" id="team-not-inovact" onClick={toggleTeamNotOnInovact}/>
                            <label htmlFor="team-not-inovact" onClick={toggleTeamNotOnInovact}>Team not on Inovact</label>
                        </div>
                    }
                </div>
            </div>
                    {
                        !isIndividualProject && 
                        !teamNotOnInovact &&
                        <div className="modal_part_two-mentions">
                            <label>Mentions</label>
                            <input type="text" placeholder="Type the usernames of the people you would like to mention" onChange={searchUsernames} ref={mentionInput}/>
                            <div className="modal_part_two-mentions-dropdown">
                                {
                                    searchedPeople.map((ppl: any)=>{
                                        return <SearchedPeople ppl={ppl} addMentions={addMentions}/>
                                    })
                                }
                            </div>
                            <div className="modal_part_two-mentions-tag-container">
                                {
                                    mentionsOfProject.map((ppl: any)=>{
                                        return <MentionsTag ppl={ppl} />
                                    })
                                }
                            </div>
                        </div>
                    }
                    <div className="modal_part_one-completed" >
                        <label>Completed Project</label>
                        <div onClick={(e: any)=>{
                                if(props.projectCompleted){
                                    handleAddProjectChange("project_status", "just_started");
                                }else{
                                    handleAddProjectChange("project_status","completed");
                                }
                            }}>
                            <SwitchSlider projectCompletion={props.projectCompletion}/>
                        </div>
                    </div>
                {
                !props.projectCompleted &&
                <div>
                    {/* <div className="modal_part_two-member-mentor">
                        <div>
                            <label>Looking for team members</label>
                            <Switch_slider/>
                        </div>
                        <div>
                            <label>Looking for a mentor</label>
                            <Switch_slider/>
                        </div>
                    </div> */}
                    <div className="modal_part_two-project-status">
                        <span>Project Status</span>
                        <div>
                            <div onClick={changeProjectStatus} >
                                <input type="radio" name="project-status" id="just-started" data-value="just_started"/><label htmlFor="just-started" data-value="just_started">Just Started</label>
                            </div>
                            
                            <div onClick={changeProjectStatus} >
                                <input type="radio" name="project-status" id="in-progress" data-value="in_progress"/><label htmlFor="in-progress" data-value="in_progress">In Progress</label>
                            </div>
                            
                            <div onClick={changeProjectStatus} data-value="near_completion">
                                <input type="radio" name="project-status" id="nearing-completion" data-value="near_completion"/><label htmlFor="nearing-completion" data-value="near_completion">Nearing Completion</label>
                            </div>
                            
                        </div>
                    </div>
                    {
                        teamMembersNeeded && 
                        <div className="modal_part_two-roles-looking-for">
                            <span>What roles are you looking for?</span>
                            {
                                allRolesNeeded.map((ele:any, index: any)=>{
                                    console.log(allRolesNeeded);
                                    return <RolesLookingFor role={ele.role} skillSelected={ele.skillNeeded} removeTheRole={removeTheRole} id={index}/>
                                    }
                                )
                            }
                            <AddRolesLookingFor addAnotherRole={addAnotherRole}/>
                        </div>
                    }
                    
                </div>
            }
            
        </div>
    )
}

export default ModalPart2;
