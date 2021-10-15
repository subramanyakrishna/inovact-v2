import React from 'react'

function PeopleToKnowProfiles(props: any) {
    return (
        <div className="people-profile-card">
            <div className="people-profile-card-img-container">
                <img
                    src={props.user.avatar}
                    className="people-profile-card-img"
                />
            </div>
            <div className="people-profile-card-data">
                <span className="people-profile-card-name">
                    {props.user.role}
                </span>
                <span className="people-profile-card-designation">
                    {props.user.designation}
                </span>
                <span className="people-profile-card-mutual-connections">
                    3 mutual connections
                </span>
            </div>
            <div>
                <button
                    className="people-profile-card-connect-btn"
                    onClick={() => props.sendConnectRequest(props.user.id)}
                >
                    Connect
                </button>
            </div>
        </div>
    )
}

export default PeopleToKnowProfiles
