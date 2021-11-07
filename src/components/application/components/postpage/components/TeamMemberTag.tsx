import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function TeamMemberTag(props: any) {
    const [isRequested, setIsRequested] = useState(false);
    const user_id = useSelector((state: any)=>state.userInfo.id);
    const connectedPeopleAccountIds = useSelector((state: any)=>state.connections.connected_account_ids);
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
            {
                connectedPeopleAccountIds.includes(props.id) && props.id!==user_id &&
                <button className="post-dedicated-team-members-btn" style={{color: isRequested?"#5579bd": "grey"}} onClick={toggleIsRequested}>{isRequested?"Requested": "Connect"}</button>
            }
            <p className="post-dedicated-team-members-role">{props.role?props.role:"Role"}</p>
        </div>
    )
}

export default TeamMemberTag;
