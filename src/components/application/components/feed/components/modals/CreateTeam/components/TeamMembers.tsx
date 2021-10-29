import React, { useRef, useState } from 'react'
import TeamMemberTag from './TeamMemberTag';
import { useSelector } from 'react-redux';
import { handleAddTeamChange } from 'StateUpdateHelper';
import SearchedPeople from '../../UploadProject/components/SearchedPeople';
import MentionsTag from '../../UploadProject/components/MentionsTag';


function TeamMembers(props: any) {
    const [teamMembers, setTeamMembers] = useState<Object[]>([]);
    const [currentName, setCurrentName] = useState("");
    const [currentRole, setCurrentRole] = useState("");

    const handleChangeName = (e: any)=>{
        setCurrentName(e.target.value)
    }

    const handleChangeRole = (e: any)=>{
        setCurrentRole(e.target.value);
    }
    const addTeamMember = (name: any, role: any)=>{
        if(currentName && currentRole){
            setCurrentName("");
            setCurrentRole("");
            setTeamMembers([...teamMembers, {name, role}]) 
        }
        
    }
    const removeTeamMember = (id: any)=>{
        setTeamMembers([...teamMembers.filter((ele: any,index: any)=>index!==id)]);
    }
    const addMentions = (mention: any)=>{
        mentionInput.current.value="";
        setSearchedPeople([]);
        setMentionsOfProject([...mentionsOfProject.filter((men: any)=>{
            return men.user_name!==mention.user_name;
        }), mention]);
        console.log(mentionsOfProject);
        props.setTeamDetails({
            ...props.teamDetails,
            team_members: mentionsOfProject.map((ele:any)=>ele.id)
        });
    }
    const [mentionsOfProject, setMentionsOfProject] = useState<any[]>([]);
    const [searchedPeople, setSearchedPeople] = useState<any[]>([]);
    const peopleYouMayKnow = useSelector((state: any)=>{
        return state.peopleYouMayKnow;
    });
    const searchUsernames = (e: any)=>{
        const value = e.target.value;
        if(value===""){
            setSearchedPeople([]);
            return;
        }
        setSearchedPeople([...peopleYouMayKnow.filter((ppl: any)=>ppl.user_name.includes(value)).slice(0,4)]);
    }
    const mentionInput: any = useRef();
    return (
        <div className="team-members">
            <label>Type the users you would like to add to the team.</label>
            <div className="team-members-add">
                <input type="text" placeholder="Username" onChange={handleChangeName} value={currentName}/>
                <input type="text" placeholder="Role" onChange={handleChangeRole} value={currentRole}/>
                <button onClick={addTeamMember.bind(null, currentName, currentRole)} className="team-members-addbtn">+Add Member</button>
            </div>
            <div className="team-member-tags-container">
                {
                    teamMembers.map((ele: any, index: any)=>{
                        return (<TeamMemberTag name={ele.name} role={ele.role} removeTeamMember={removeTeamMember} id={index}/>);
                    })
                }
            </div>
            {/* <div className="modal_part_two-mentions">
                    <label>Add Team Members</label>
                    <input type="text" placeholder="Type the usernames of the people you would like to add to team" onChange={searchUsernames} ref={mentionInput}/>
                    <div className="modal_part_two-mentions-dropdown">
                        {
                            searchedPeople.map((ppl: any)=>{
                                return <SearchedPeople ppl={ppl} addMentions={addMentions}/>
                            })
                        }
            </div> */}
            {/* <div className="modal_part_two-mentions-tag-container">
                {
                    mentionsOfProject.map((ppl: any)=>{
                        return <MentionsTag ppl={ppl} />
                    })
                }
            </div> */}
        </div>
    )
}

export default TeamMembers;
