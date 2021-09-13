import React from 'react'

function PeopleToKnowProfiles() {
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    return (
        <div className="people-profile-card">
            <div className="people-profile-card-img-container">
                <img src={image} className="people-profile-card-img"/>
            </div>
            <div className="people-profile-card-data">
                <span className="people-profile-card-name">Jane Doe</span>
                <span className="people-profile-card-designation">Designation</span>
                <span className="people-profile-card-mutual-connections">3 mutual connections</span>
            </div>
            <div>
                <button className="people-profile-card-connect-btn">Connect</button>
            </div>
        </div>
    )
}

export default PeopleToKnowProfiles;
