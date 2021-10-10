import React, { useState } from 'react'
import AddRolesLookingFor from './AddRolesLookingFor';
import RolesLookingFor from './RolesLookingFor';
import SwitchSlider from './SwitchSlider';
import MemberMentor from './MemberMentor';
import { handleAddProjectChange } from 'StateUpdateHelper';
function ModalPart2(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);
    const [teamMembersNeeded, setTeamMembersNeeded] = useState(false);
    const [isIndividualProject, setIsIndividualProject] = useState(false);
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
    }
    const toggleIsIndividualProject =()=>{
        setIsIndividualProject(!isIndividualProject);
    }
    const changeProjectStatus = (e: any)=>{
        console.log(e.target.getAttribute("data-value"));
        handleAddProjectChange("project_status",e.target.getAttribute("data-value"));
    }
    return (
        <div className="modal_part_two">
            <div className="modal_part_two-team-worked">
                <label>Choose the team that worked on the project</label>
                <input type="text" placeholder="Start typing team name"/>
                <div>
                    <div >
                        <input type="checkbox" onClick={toggleIsIndividualProject} id="individual"/>
                        <label htmlFor="individual">Individual Project</label>
                    </div>
                    {
                        !isIndividualProject &&
                        <div>
                            <input type="checkbox"/>
                            <span>Team not on Inovact</span>
                        </div>
                    }
                    
                    
                </div>
            </div>
                    {
                        !isIndividualProject &&
                        <div className="modal_part_two-mentions">
                            <label>Mentions</label>
                            <input type="text" placeholder="Type the usernames of the people you would like to mention"/>
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
                            <SwitchSlider projectCompletion={props.projectCompletion} />
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
                    <MemberMentor teamMemberNeeded={toggleTeamMemberNeeded}/>
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
