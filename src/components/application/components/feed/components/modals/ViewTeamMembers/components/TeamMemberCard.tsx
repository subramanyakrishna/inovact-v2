import React from 'react'

function TeamMemberCard(props: any) {
    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
    return (
        <div className="team-member-card">
            <img src={image}/>
            <span className="team-member-card-name">{props.name}</span>
            <span className="team-member-card-role">{props.role}</span>
            <span className="team-member-card-designation">{props.designation}</span>
        </div>
    )
}

export default TeamMemberCard;
