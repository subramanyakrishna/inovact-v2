import React, {useState} from 'react';
//Components
import TeamNameDescription from './components/TeamNameDescription';
import TeamMembers from './components/TeamMembers';
import TagsCovered from './components/TagsCovered';
import SwitchSlider from '../UploadProject/components/SwitchSlider';
import RolesLookingFor from '../UploadProject/components/RolesLookingFor';
import AddRolesLookingFor from '../UploadProject/components/AddRolesLookingFor';
//redux
import { useSelector } from 'react-redux';
import { handleAddTeamChange } from 'StateUpdateHelper';
import useRequests from 'useRequest/useRequest';

function CreateTeam(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);
    const [allTeamMembers, setAllTeamMembers] = useState<Object[]>([]);
    const [teamMembersNeeded, setTeamMembersNeeded] = useState(false);
    const [mentorNeeded, setMentorNeeded] = useState(false);

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

    const addnewTeam = useSelector((state: any)=> state.addTeam);

    const { doRequest, errors } = useRequests({
        route: "team",
        method: "post",
        body: {
            ...addnewTeam,
        },
        onSuccess: (data: any)=> {
            handleAddTeamChange("team_clear_data", "");
            console.log("Sucessssfully addedd team",data);
        }
    });
    
    const addNewTeam = async(e: any)=>{
        e.preventDefault();
        props.closeModal();
        await doRequest();
        window.location.reload();
    }
    const removeTheRole = (id:any)=>{
        setAllRolesNeeded(allRolesNeeded.filter((ele:any,idx: any)=> idx!==id));
    }
    const toggleTeamMemberNeeded = ()=>{
        setTeamMembersNeeded(!teamMembersNeeded);
         handleAddTeamChange("looking_for_members",teamMembersNeeded);
    }
    const toggleMentorNeeded = ()=>{
            setMentorNeeded(!mentorNeeded);
            handleAddTeamChange("looking_for_mentor",mentorNeeded)
    }
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Create Team</label>
                <div className="modal_content">
                    <div>    
                        <TeamNameDescription/>
                        <TagsCovered/>
                        <TeamMembers/>                   
                    </div>
                        <div className="modal_part_two">
                    <div className="modal_part_two-member-mentor">
                        <div>
                            <label>Looking for team members</label>
                            <div onClick= {toggleTeamMemberNeeded}>
                                <SwitchSlider/>
                            </div>
                        </div>
                        <div>
                            <label>Looking for a mentor</label>
                            <div onClick={ toggleMentorNeeded}> 
                                <SwitchSlider/>
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
                    <div className="modal_cover-post-btn">
                        <button onClick={addNewTeam}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam;
