import React, { useState } from 'react'

function TeamMemberTag(props: any) {
    const [isRequested, setIsRequested] = useState(false);
    const toggleIsRequested = ()=>{
        setIsRequested(true);
    }
    return (
        <div className="post-dedicated-team-members">
            <div className="post-dedicated-team-members-user">
                <div className="post-dedicated-team-members-user-img-container">
                    <img src={props.avatar} alt="user"/>
                </div>
                <p className="post-dedicated-team-members-user-name">{props.name}</p>
            </div>
            <button className="post-dedicated-team-members-btn" style={{color: isRequested?"#5579bd": "grey"}} onClick={toggleIsRequested}>{isRequested?"Requested": "Connect"}</button>
            <p className="post-dedicated-team-members-role">{props.role}</p>
        </div>
    )
}

export default TeamMemberTag;
