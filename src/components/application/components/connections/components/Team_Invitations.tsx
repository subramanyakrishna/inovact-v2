import Spinner from 'components/application/Spinner'
import React, { useEffect, useState } from 'react'
import { makeApiCall } from './connectionsUtils'

const Buttons = (props: any) => {
    const [isAcceptShow, setisAcceptShow] = useState<boolean>(true)
    const [isRejectShow, setisRejectShow] = useState<boolean>(true)
    const acceptTeamInvitation = async (id: number) => {
        setisAcceptShow(true)
        setisRejectShow(false)
        const response = await makeApiCall('post', `team/invite/accept`, {
            invitation_id: id,
        })
        console.log(response)
    }

    const rejectTeamInvitation = async (id: number) => {
        setisAcceptShow(false)
        setisRejectShow(true)
        const response = await makeApiCall('post', `team/invite/reject`, {
            invitation_id: id,
        })
        console.log(response)
    }

    return (
        <div className="suggestions__row__buttons">
            <div>
                {isAcceptShow && (
                    <button
                        className="connect-button"
                        onClick={() =>
                            acceptTeamInvitation(props.invitation.id)
                        }
                    >
                        {isAcceptShow && isRejectShow && 'Accept'}
                        {isAcceptShow && !isRejectShow && 'Accepted'}
                    </button>
                )}
                {isRejectShow && (
                    <button
                        className="connect-button"
                        onClick={() =>
                            rejectTeamInvitation(props.invitation.id)
                        }
                    >
                        {isAcceptShow && isRejectShow && 'Reject'}
                        {!isAcceptShow && isRejectShow && 'Rejected'}
                    </button>
                )}
            </div>
        </div>
    )
}
//used predefined styles
const Team_Invitations = () => {
    const [isLoad, setIsload] = useState<boolean>(true)
    const [allInvitations, setAllInvitations] = useState<any>([])

    useEffect(() => {
        ;(async () => {
            const res = await makeApiCall('get', 'notifications')
            const notificationDataFromAPi = res.data.data.user[0]
            const teamInvitations = notificationDataFromAPi['team_invitations']
            console.log(teamInvitations)
            setIsload(false)
            setAllInvitations(teamInvitations)
        })()
    }, [])
    return (
        <div
            className="suggestions"
            style={{
                marginTop: '30px',
                borderRadius: '10px',
                height: '400px',
                overflowY: 'scroll',
            }}
        >
            <h6 className="suggestions__title">Team Invitations</h6>
            {isLoad && <Spinner />}
            {!isLoad && allInvitations.length === 0 && (
                <div className="text-align--center">No Team Invitations</div>
            )}
            {!isLoad &&
                allInvitations.length !== 0 &&
                allInvitations.map((invitation: any) => {
                    return (
                        <div
                            className="suggestions__row"
                            key={Number(Math.random() * 1000)}
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <div
                                className="suggestions__row__rowInfo"
                                style={{
                                    display: 'flex',
                                    marginRight: 'auto',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src={
                                            invitation.team.img
                                                ? invitation.team.img
                                                : 'image'
                                        }
                                        alt="Team Image"
                                    />

                                    <div className="suggestions__row__text">
                                        <h5 className="text-style--bold text-align--left text-size--big">
                                            {invitation.team.name}
                                        </h5>
                                        <p className="text-style--light text-align--left text-size--small"></p>
                                    </div>
                                </div>
                            </div>
                            <Buttons invitation={invitation} />
                        </div>
                    )
                })}
            )
        </div>
    )
}

export default Team_Invitations
