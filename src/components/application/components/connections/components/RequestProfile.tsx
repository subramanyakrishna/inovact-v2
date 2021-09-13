import React from 'react'


function RequestProfile() {
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    return (
        <div className="my-requests-profile">
            <div className='my-requests-profile-img'>
                <img src={image} />
            </div>
            <div className="my-requests-profile-data">
                <span className="my-requests-profile-name">Jane Doe</span>
                <span className="my-requests-profile-designation">Designation</span>
                <span className="my-requests-profile-time">Connected 10 min ago</span>
            </div>
            <div className="my-requests-profile-btn-container">    
                <button className="my-requests-profile-accept-btn">Accept</button>
                <button className="my-requests-profile-reject-btn">Remove</button>
            </div>
        </div>
    )
}

export default RequestProfile;
