import React from 'react';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

function ConnectionProfile() {
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    return (
        <div className="my-connection-profile">
            <div className='my-connection-profile-img'>
                <img src={image} className="my-connection-profile-img"/>
            </div>
            <div className="my-connection-profile-data">
                <span className="my-connection-profile-name">Jane Doe</span>
                <span className="my-connection-profile-designation">Designation</span>
                <span className="my-connection-profile-time">Connected 10 min ago</span>
            </div>
            <div className="my-connection-profile-btn-container">    
                <button className="my-connection-profile-msg-btn">
                    <QuestionAnswerOutlinedIcon fontSize="medium" style={{padding: "3px"}}/>
                    Message Privately
                    </button>
                <button className="my-connection-profile-reject-btn">Remove</button>
            </div>
        </div>
    )
}

export default ConnectionProfile;
