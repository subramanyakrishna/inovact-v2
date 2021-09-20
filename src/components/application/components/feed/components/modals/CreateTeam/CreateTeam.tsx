import React, {useState} from 'react';
//Components
import TeamNameDescription from './components/TeamNameDescription';
import TagsCovered from './components/TagsCovered';
import ProjectTitle from './components/ProjectTitle';
import ProjectStatus from './components/ProjectStatus';
import TeamMembers from './components/TeamMembers';
import MemberMentor from '../UploadProject/components/MemberMentor';
import AddRolesLookingFor from '../UploadProject/components/AddRolesLookingFor';
import RolesLookingFor from '../UploadProject/components/RolesLookingFor';
import TeamMemberTag from './components/TeamMemberTag';

function CreateTeam(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);

    const [allTeamMembers, setAllTeamMembers] = useState<Object[]>([]);

    const addTeamMember = (email: any, role: any)=>{
        setAllTeamMembers([...allTeamMembers,{email, role}])
    }


    const addAnotherRole = (role:any, tags:any)=>{
        console.log(role, tags);
        setAllRolesNeeded([...allRolesNeeded, {role: role, skillNeeded: tags}]);
    }
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Create Team</label>
                <div className="modal_content">
                    <TeamNameDescription/>
                    <TagsCovered/>
                    <ProjectTitle/>
                    <ProjectStatus/>
                    <TeamMembers/>
                    <MemberMentor/>
                    <div className="adding-roles">
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
                    
                    <div className="modal_cover-post-btn">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam;
