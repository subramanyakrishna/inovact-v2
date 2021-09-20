import React from 'react'

function TeamMemberTag(props: any) {
    return (
        <div className="team-member-tag">
            <span className="team-member-tag-email">{props.emailid}</span>
            <span className="team-member-tag-role">: {props.role}</span>
        </div>
    )
}

export default TeamMemberTag;
