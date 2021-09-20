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
    return (
        <div className="team-members">
            <span>Type the email id of the members your would like to add your team</span>
            <div>
                <input type="text" placeholder="Emailid" onChange={handleChangeEmail} value={currentEmail}/>
                <input type="text" placeholder="Role" onChange={handleChangeRole} value={currentRole}/>
                <button onClick={addTeamMember.bind(null, currentEmail, currentRole)}>+Add Member</button>
            </div>
            <div className="team-member-tags-container">
                {
                    teamMembers.map((ele: any)=>{
                        return (<TeamMemberTag emailid={ele.email} role={ele.role}/>);
                    })
                }
            </div>
        </div>
    )
}

export default TeamMembers;
