import React from 'react'
import { useHistory } from 'react-router'

function PeopleToKnowProfiles(props: any) {
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
        <div className="people-profile-card">
            <div
                className="people-profile-card-img-container"
                onClick={() => goToProfile()}
            >
                <img
                    src={props.user.avatar}
                    alt=""
                    className="people-profile-card-img"
                />
            </div>
            <div className="people-profile-card-data">
                <span className="people-profile-card-name">
                    {`${props.user.first_name} ${props.user.last_name}`}
                </span>
                <span className="people-profile-card-designation">
                    {props.user.designation}
                </span>
                {/* <span className="people-profile-card-mutual-connections">
                    3 mutual connections
                </span> */}
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
