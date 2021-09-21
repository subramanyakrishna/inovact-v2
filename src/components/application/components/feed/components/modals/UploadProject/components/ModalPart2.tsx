import React, { useState } from 'react'
import AddRolesLookingFor from './AddRolesLookingFor';
import RolesLookingFor from './RolesLookingFor';
import Switch_slider from './Switch_slider';
import MemberMentor from './MemberMentor';
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
                    <div className="modal_part_one-completed">
                        <label>Completed Project</label>
                        <Switch_slider projectCompletion={props.projectCompletion}/>
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
                            <div>
                                <input type="radio" name="project-status"/><label >Just Started</label>
                            </div>
                            
                            <div>
                                <input type="radio" name="project-status"/><label>In Progress</label>
                            </div>
                            
                            <div>
                                <input type="radio" name="project-status"/><label>Nearing Completion</label>
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
