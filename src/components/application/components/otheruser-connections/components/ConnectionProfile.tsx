import React from 'react'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ConnectionProfile(props: any) {
    const history = useHistory()
    const userInfo = useSelector((state: any) => state.userInfo)
    const goToProfile = () => {
        console.log('ConnectionProfile,', props.user.id)
        localStorage.setItem('other-user', props.user.id)
        if (history.location.pathname === '/app/otherprofile') {
            window.location.reload()
            window.scrollTo(0, 0)
            return
        }
        history.push('/app/otherprofile')
    }
    return (
        <div className="my-connection-profile">
            <div className="my-connection-profile-container">
                <div
                    className="my-connection-profile-img"
                    onClick={() => goToProfile()}
                >
                    <img
                        src={props.user.avatar}
                        alt="user"
                        className="my-connection-profile-img"
                    />
                </div>
                <div className="my-connection-profile-data">
                    <span className="my-connection-profile-name">
                        {props.user.first_name + ' ' + props.user.last_name}
                    </span>
                    <span className="my-connection-profile-designation">
                        {props.user.role}
                    </span>
                </div>
            </div>
            <div className="my-connection-profile-btn-container">
                {props.user.id !== userInfo.id && (
                    <button className="connect-button">Connect</button>
                )}
                {/* <button className="my-connection-profile-msg-btn">
                    <QuestionAnswerOutlinedIcon
                        fontSize="medium"
                        style={{ padding: '3px' }}
                    />
                    Message Privately
                </button> */}
                {/* <button
                    className="my-connection-profile-reject-btn"
                    onClick={() => props.handleRemoveConnection(props.user.id)}
                >
                    Remove
                </button> */}
            </div>
        </div>
    )
}

export default ConnectionProfile
