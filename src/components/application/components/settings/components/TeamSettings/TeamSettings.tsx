import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeamWithAdminAccessAction } from 'redux/actions/teamWIthAdminAccessActions'
import makeApiCall from '../../makeApiCall'
import Toggle from '../Toggle/Toggle'

interface teamSettings {
    deleteTeam(id: number): void
    handleUserInfoChange(name: string, value: any): void
    saveDataToServer(): void
}
const TeamSettings: React.FC<teamSettings> = ({
    deleteTeam,
    handleUserInfoChange,
    saveDataToServer,
}) => {
    const team_with_admin_access_ids = useSelector(
        (state: any) => state.userInfo.team_with_admin_access
    )
    const dispatch = useDispatch()
    useEffect(() => {
        let teamsWhereCurrentUserIsMember
        ;(async () => {
            teamsWhereCurrentUserIsMember = await makeApiCall('get', 'team')
            console.log(teamsWhereCurrentUserIsMember)

            teamsWhereCurrentUserIsMember =
                teamsWhereCurrentUserIsMember.data.data.team
        })()
        const team_with_admin_access_data = team_with_admin_access_ids.map(
            (team_id: number) => {
                //call the teams end point and get the team details which is name
                const team = {
                    id: team_id,
                    name: 'Team ' + Math.random().toString().substring(2, 4),
                    avatar: 'https://bit.ly/3EKg3dQ',
                }
                return {
                    id: team.id,
                    name: team.name,
                    avatar: team.avatar,
                }
            }
        )
        dispatch(updateTeamWithAdminAccessAction(team_with_admin_access_data))
    }, [])
    const team_with_admin_access_data = useSelector(
        (state: any) => state.teamWithAdminAccess.teamWithAdminAccess
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
    const handleDeleteTeam = (id: number) => {
        deleteTeam(id)
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
                {team_with_admin_access_data.map((team: any) => (
                    <div className={'teamset-delete-team'} key={team.id}>
                        <div className={'teamset-delete-team-main'}>
                            <div className="teamset-delete-team-main-left">
                                <img src={team.avatar} alt={team.name}></img>
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
