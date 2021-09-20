import React, { useState } from 'react'
import AddRolesLookingFor from './AddRolesLookingFor';
import RolesLookingFor from './RolesLookingFor';
import Switch_slider from './Switch_slider';
import MemberMentor from './MemberMentor';
function ModalPart2(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);

    const addAnotherRole = (role:any, tags:any)=>{
        console.log(role, tags);
        setAllRolesNeeded([...allRolesNeeded, {role: role, skillNeeded: tags}]);
    }

    return (
        <div className="modal_part_two">
            <div className="modal_part_two-team-worked">
                <label>Choose the team that worked on the project</label>
                <input type="text" placeholder="Start typing team name"/>
                <div>
                    <div>
                        <input type="checkbox"/>
                        <label>Individual Project</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>Team not on Inovact</span>
                    </div>
                    
                </div>
            </div>
        
                    <div className="modal_part_two-mentions">
                        <label>Mentions</label>
                        <input type="text" placeholder="Type the usernames of the people you would like to mention"/>
                    </div>
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
                    <MemberMentor/>
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
                    <div className="modal_part_two-roles-looking-for">
                        <span>What roles are you looking for?</span>
                        {
                            allRolesNeeded.map((ele:any)=>{
                                console.log(allRolesNeeded);
                                return <RolesLookingFor role={ele.role} skillSelected={ele.skillNeeded}/>
                                }
                            )
                        }
                        <AddRolesLookingFor addAnotherRole={addAnotherRole}/>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default ModalPart2;
