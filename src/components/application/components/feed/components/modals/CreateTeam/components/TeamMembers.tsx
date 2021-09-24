import React, { useState } from 'react'
import TeamMemberTag from './TeamMemberTag';

function TeamMembers() {
    const [teamMembers, setTeamMembers] = useState<Object[]>([]);
    const [currentEmail, setCurrentEmail] = useState("");
    const [currentRole, setCurrentRole] = useState("");

    const handleChangeEmail = (e: any)=>{
        setCurrentEmail(e.target.value)
    }

    const handleChangeRole = (e: any)=>{
        setCurrentRole(e.target.value);
    }
    const addTeamMember = (email: any, role: any)=>{
        if(currentEmail && currentRole){
            setCurrentEmail("");
            setCurrentRole("");
            setTeamMembers([...teamMembers, {email, role}]) 
        }
        
    }
    const removeTeamMember = (id: any)=>{
        setTeamMembers([...teamMembers.filter((ele: any,index: any)=>index!==id)]);
    }
    return (
        <div className="team-members">
            <span>Type the email id of the members your would like to add your team</span>
            <div className="team-members-add">
                <input type="text" placeholder="Emailid" onChange={handleChangeEmail} value={currentEmail}/>
                <input type="text" placeholder="Role" onChange={handleChangeRole} value={currentRole}/>
                <button onClick={addTeamMember.bind(null, currentEmail, currentRole)} className="team-members-addbtn">+Add Member</button>
            </div>
            <div className="team-member-tags-container">
                {
                    teamMembers.map((ele: any, index: any)=>{
                        return (<TeamMemberTag emailid={ele.email} role={ele.role} removeTeamMember={removeTeamMember} id={index}/>);
                    })
                }
            </div>
        </div>
    )
}

export default TeamMembers;
