import React, { useState, useEffect } from 'react'
import search from 'images/feed/search.svg'
import link from 'images/teams/cc-link.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MemberForInvite from 'components/application/components/teams/components/modals/FindMembers'
import axios from 'axios'
import { identity } from '../../../../../../../node_modules/rxjs/dist/types'
function InviteMembers(props: any) {
    const allTeams = useSelector((state: any) => state.teams.teams)

    const [buttonText, setButtonText] = useState('Invite')
    const changeText = () => setButtonText('Invited')
    const [users, setUsers] = useState<any>([])
    const users_from_api = useSelector((state: any) => state.peopleYouMayKnow)
    const userInfo = useSelector((state: any) => state.userInfo)
    const handleShareModal = (e: any) => {
        props.closeModal()
        props.viewShareModal()
    }
    useEffect(() => {
        const userIdsWhoAreInvitedAlready = props.team.team_invitations.map(
            (team_invitation: any) => team_invitation.user.id
        )
        console.log(userIdsWhoAreInvitedAlready)
        const filteredUsers = users_from_api.filter(
            (user: any) =>
                userIdsWhoAreInvitedAlready.indexOf(user.user_id) === -1 &&
                user.user_id !== userInfo.id
        )
        console.log('filteredUsers', filteredUsers)
        setUsers(filteredUsers)
    }, [])

    const handleInviteTeamMember = async (id: any) => {
        const teamId = props.team.id
        const userId = id
        setTimeout(() => {
            setUsers(users.filter((user: any) => user.user_id != userId))
        }, 2000)
        console.log('teamid,uderid', teamId, userId)
        const response = await axios({
            method: 'post',
            url: 'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/invite',
            data: { team_id: teamId, user_id: userId },
            headers: {
                Authorization: localStorage.getItem('user'),
            },
        }).then((res: any) => {
            console.log(res)
        })
        var resp = await axios({
            method: 'get',
            url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team?team_id=${teamId}`,
            headers: {
                Authorization: localStorage.getItem('user'),
            },
        })
        const changed_team = resp.data.data.team[0]
        console.log('changed_team')
    }

    return (
        <div className="modal_main">
            <div className="modal_cover-invite">
                <button className="close-modal" onClick={props.closeModal}>
                    &times;
                </button>
                <label className="modal_cover-title">Invite Members</label>
                <div className="modal_part_one-invite">
                    <div className="modal_part_one-invite__fixed-top">
                        <div className="modal_part_one-invite__fixed-top__input">
                            <div className="modal_part_one-invite__fixed-top__input--search">
                                <input
                                    type="search"
                                    className="input-component--invite-search"
                                />
                                <img src={search} />
                            </div>

                            <div className="modal_part_one-invite__fixed-top__input--link">
                                <input
                                    type="search"
                                    className="input-component--invite-search"
                                />
                                <img src={link} width="20" />
                            </div>
                        </div>

                        <button
                            className="connect-button"
                            onClick={handleShareModal}
                        >
                            Share Link
                        </button>
                    </div>

                    <div className="invite-members">
                        {users.map((item: any) => {
                            return (
                                <MemberForInvite
                                    key={item.user_id}
                                    item={item}
                                    handleInviteTeamMember={
                                        handleInviteTeamMember
                                    }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InviteMembers
