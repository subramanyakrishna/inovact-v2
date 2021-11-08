import React from 'react'
import { useHistory } from 'react-router-dom'

function RequestProfile(props: any) {
    const history = useHistory()
    const goToProfile = () => {
        localStorage.setItem('other-user', props.user.id)
        if (history.location.pathname === '/app/otherprofile') {
            window.location.reload()
            window.scrollTo(0, 0)
            return
        }
        history.push('/app/otherprofile')
    }
    return (
        <div className="my-requests-profile">
            <div
                className="my-requests-profile-img"
                onClick={() => goToProfile()}
            >
                <img src={props.user.avatar} />
            </div>
            <div
                className="my-requests-profile-data"
                onClick={() => goToProfile()}
            >
                <span className="my-requests-profile-name">
                    {props.user.name}
                </span>
                <span className="my-requests-profile-designation">
                    {props.user.designation}
                </span>
                <span className="my-requests-profile-time">
                    Connected {props.user.connected_at_in_words} ago
                </span>
            </div>
            <div className="my-requests-profile-btn-container">
                <button
                    className="my-requests-profile-accept-btn"
                    onClick={() =>
                        props.acceptConnectRequest(props.user.id, props.user)
                    }
                >
                    Accept
                </button>
                <button
                    className="my-requests-profile-reject-btn"
                    onClick={() => props.rejectConnectRequest(props.user.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default RequestProfile
