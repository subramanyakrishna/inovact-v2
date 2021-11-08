import React, { useState } from 'react'
import msg from 'images/teams/msg.svg'
import { useHistory } from 'react-router'

const MemberInfo = (props: any) => {
    const history = useHistory()
    const [showOptions, setShowOptions] = useState(false)
    const toggleShowOptions = () => {
        setShowOptions(!showOptions)
    }
    const toggleShowOptionsSlow = () => {
        setTimeout(() => toggleShowOptions(), 1000)
    }
    const getTheOtherUser = async (userId: any) => {
        localStorage.setItem('other-user', userId)
        history.push('/app/otherprofile')
    }
    return (
        <div className="members-info">
            <div className="members-info__details">
                <img src={props.member.user.avatar} alt="name" />
                <h5 className="text-size--big">
                    {props.member.user.first_name}
                </h5>
            </div>

            <div className="members-info__details--contact">
                <img src={msg} alt="msg" />
                <h5 className="text-size--big">Message Privately</h5>
            </div>

            {props.member.admin ? (
                <div
                    className="text-color--green"
                    onClick={getTheOtherUser.bind(null, props.member.user.id)}
                >
                    Admin
                </div>
            ) : (
                <div className="members-info__details--role">
                    <h5 className="text-size--big">{props.member.role}</h5>
                    {props.member.admin ? (
                        <div className="members-info__details__dropdown">
                            <button
                                className="text-size--small"
                                onClick={toggleShowOptions}
                            >
                                &#8942;
                            </button>
                            {showOptions && (
                                <div
                                    className="drop-down--options--all"
                                    onMouseLeave={toggleShowOptionsSlow}
                                >
                                    <span onClick={props.viewDeleteMember}>
                                        Delete
                                    </span>
                                    <span onClick={props.viewMakeAdmin}>
                                        Make Admin
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            onClick={getTheOtherUser.bind(
                                null,
                                props.member.user.id
                            )}
                            style={{ cursor: 'pointer', paddingLeft: '0.5rem' }}
                            className="connect-button"
                        >
                            View More
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default MemberInfo
