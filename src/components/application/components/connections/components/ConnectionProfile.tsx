import React from 'react'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined'

function ConnectionProfile(props: any) {
    return (
        <div className="my-connection-profile">
            <div className="my-connection-profile-img">
                <img
                    src={props.user.avatar}
                    className="my-connection-profile-img"
                />
            </div>
            <div className="my-connection-profile-data">
                <span className="my-connection-profile-name">
                    {props.user.name}
                </span>
                <span className="my-connection-profile-designation">
                    {props.user.designation}
                </span>
                <span className="my-connection-profile-time">
                    Connected {props.user.connected_at_in_words} ago
                </span>
            </div>
            <div className="my-connection-profile-btn-container">
                <button className="my-connection-profile-msg-btn">
                    <QuestionAnswerOutlinedIcon
                        fontSize="medium"
                        style={{ padding: '3px' }}
                    />
                    Message Privately
                </button>
                <button
                    className="my-connection-profile-reject-btn"
                    onClick={() => props.handleRemoveConnection(props.user.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ConnectionProfile
