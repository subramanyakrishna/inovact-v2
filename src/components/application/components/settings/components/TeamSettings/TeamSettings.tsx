import axios from 'axios'
import useRequests from 'useRequest/useRequest'
import Spinner from 'components/application/Spinner'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeamWithAdminAccessAction } from 'redux/actions/teamWIthAdminAccessActions'
import makeApiCall from '../../makeApiCall'
import Toggle from '../Toggle/Toggle'

interface teamSettings {
    deleteTeam(id: number): void
    handleUserInfoChange(name: string, value: any): void
    saveDataToServer(): void
}
interface teamI {
    id: number
    name: string
    avatar: string
}
const TeamSettings: React.FC<teamSettings> = ({
    deleteTeam,
    handleUserInfoChange,
    saveDataToServer,
}) => {
    const ownId = useSelector((state: any) => state.userInfo.id)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const dispatch = useDispatch()
    useEffect(() => {
        ;(async () => {
            const response = await makeApiCall('get', 'team')
            const teamsWhereCurrentUserIsMember = response.data.data.team
            console.log(teamsWhereCurrentUserIsMember)
            const filtetredTeamsWhereCurrentUserIsMember: teamI[] = []

            teamsWhereCurrentUserIsMember.forEach((team: any) => {
                const teamWithAdminAccess = team.team_members.filter(
                    (team_member: any) =>
                        team_member.admin && team_member.user.id === ownId
                )[0]
                if (teamWithAdminAccess) {
                    filtetredTeamsWhereCurrentUserIsMember.push({
                        id: team.id,
                        name: team.name,
                        avatar: team.avatar,
                    })
                }
            })
            dispatch(
                updateTeamWithAdminAccessAction(
                    filtetredTeamsWhereCurrentUserIsMember
                )
            )
            setIsLoading(false)
            console.log(filtetredTeamsWhereCurrentUserIsMember)
        })()
    }, [])
    // const team_with_admin_access_data = useSelector(
    //     (state: any) => state.teamWithAdminAccess.teamWithAdminAccess
    // )
    const teams = useSelector((state: any) => {
        return state.teams.teams
    })
    const [teams_with_admin_access_data, setTWAA] = useState<any>(
        teams.filter((team: any) => {
            for (let i = 0; i < team.team_members.length; i++) {
                if (team.team_members[i].admin) {
                    return true
                }
            }
            return false
        })
    )
    const handleAllowOthersToViewTeam = (event: any) => {
        handleUserInfoChange('team_public_visibility', event.target.checked)
    }
    // const handleAllowOthersToRequestJoin = (checked: boolean) => {
    //     console.log('handleAllowOthersToRequestJoin', checked)
    // }
    // const handleAllTeamMemberSendInvitation = (checked: boolean) => {
    //     console.log('handleAllTeamMemberSendInvitation', checked)
    // }

    const handleDeleteTeam = async (id: number) => {
        console.log(id, teams_with_admin_access_data)
        setTWAA(
            teams_with_admin_access_data.filter((team: any) => team.id !== id)
        )
        console.log('filtered')
        await axios({
            method: 'delete',
            url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team?team_id=${id}`,
            headers: {
                Authorization: localStorage.getItem('user'),
            },
        }).then((resp: any) => {
            console.log(resp)
        })
    }
    return (
        <div className={'teamset'}>
            <div
                className={
                    'teamset-head paragraph-primary text-style--bold text-color--black'
                }
            >
                General Team Settings
            </div>
            <div className={'teamset-select'}>
                <div className={'teamset-select-item'}>
                    <div className="text-color--black">
                        Allow other users to view your teams
                    </div>
                    <Toggle
                        checked={useSelector(
                            (state: any) =>
                                state.userInfo.team_public_visibility
                        )}
                        handleChecked={handleAllowOthersToViewTeam}
                    />
                </div>
                {/* <div className={'teamset-select-item'}>
                    <div className="text-color--black">
                        Allow everyone to request to join
                    </div>
                    <Toggle
                        checked={true}
                        handleChecked={handleAllowOthersToRequestJoin}
                    />
                </div>
                <div className={'teamset-select-item'}>
                    <div className="text-color--black">
                        Allow all team memebers to send invitations
                    </div>
                    <Toggle
                        checked={true}
                        handleChecked={handleAllTeamMemberSendInvitation}
                    />
                </div> */}
            </div>
            <div
                className={
                    'teamset-head paragraph-primary text-style--bold text-color--black'
                }
            >
                Delete a team
            </div>
            <div className={'teamset-delete'}>
                {isLoading && (
                    <div style={{ margin: 'auto' }}>
                        <Spinner />
                    </div>
                )}
                {!isLoading && teams_with_admin_access_data.length == 0 && (
                    <div style={{ margin: 'auto' }}>
                        Teams for which you have admin access will apear here
                    </div>
                )}
                {!isLoading &&
                    teams_with_admin_access_data.map((team: any) => (
                        <div className={'teamset-delete-team'} key={team.id}>
                            <div className={'teamset-delete-team-main'}>
                                <div className="teamset-delete-team-main-left">
                                    <img
                                        src={team.avatar}
                                        alt={team.name}
                                    ></img>
                                    <div className="teamset-delete-team-main-left-name text-style--bold text-color--black">
                                        {team.name}
                                    </div>
                                </div>
                                <div
                                    onClick={() => handleDeleteTeam(team.id)}
                                    className={
                                        'teamset-delete-team-main-left-deleteTeam text-style--bold'
                                    }
                                >
                                    Delete team
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '30px',
                    paddingLeft: '10px',
                }}
            >
                <button
                    className={
                        'privacy-settings-pswd-change-btn text-color--white'
                    }
                    onClick={() => saveDataToServer()}
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default TeamSettings
