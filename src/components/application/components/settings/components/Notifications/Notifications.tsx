import { Email, InputOutlined } from '@material-ui/icons'
import React from 'react'
import Toggle from '../Toggle/Toggle'
import { TeamsData } from './tempData'

const Notifications: React.FC<any> = (props: any) => {
    const handleAllNotification = (checked: boolean) => {
        console.log('handleAllNotification', checked)
    }
    const handleDirectMsg = (checked: boolean) => {
        console.log('handleDirectMsg', checked)
    }
    const handleLoginNotif = (checked: boolean) => {
        console.log('handleLoginNotif', checked)
    }
    const handlenewVersion = (checked: boolean) => {
        console.log('handlenewVersion', checked)
    }
    const offAllTeamNotif = (checked: boolean) => {
        console.log('offAllTeamNotif', checked)
    }
    const handleEachTeamNotif = (team: {
        _id: string
        name: string
        checked: boolean
    }) => {
        console.log(team)
    }
    const handleMentionNotif = (checked: boolean) => {
        console.log('handleMentionNotif', checked)
    }
    const handleLikesNotif = (checked: boolean) => {
        console.log('handleLikesNotif', checked)
    }
    const handleCommentsNotif = (checked: boolean) => {
        console.log('handleCommentsNotif', checked)
    }
    return (
        <div className={'notification'}>
            <div className="notification-head  paragraph-primary text-style--bold text-color--black">
                Manage Notification Permissions
            </div>

            <div className="notification-first">
                <div className="notification-first-allnotif">
                    <div
                        className="notification-first-allnotif-text text-style--bold text-color--black"
                        style={{ fontSize: '1.1rem' }}
                    >
                        Turn of all notifications
                    </div>
                    <Toggle
                        checked={true}
                        handleChecked={handleAllNotification}
                    />
                </div>
                <div className="notification-first-dirmess">
                    <div className="notification-first-dirmess-text text-color--black">
                        Show notifications on recieving a direct message
                    </div>
                    <Toggle checked={true} handleChecked={handleDirectMsg} />
                </div>
                <div className="notification-first-login">
                    <div className="notification-first-login-text text-color--black">
                        Show notifications when a new device logs-in to this
                        account
                    </div>
                    <Toggle checked={true} handleChecked={handleLoginNotif} />
                </div>
                <div className="notification-first-newVersion">
                    <div className="notification-first-newVersion-text text-color--black">
                        Show notifications when a new version is released
                    </div>
                    <Toggle checked={true} handleChecked={handlenewVersion} />
                </div>
                <div className="notification-first-teamNotif">
                    <div
                        className="notification-first-newVersion-text text-style--bold text-color--black"
                        style={{ fontSize: '1.1rem', marginTop: '10px' }}
                    >
                        Team Notifications
                    </div>
                </div>
                <div className="notification-first-offAllTeamNotif">
                    <div className="notification-first-offAllTeamNotif-text text-color--black">
                        Disable notifications from all teams
                    </div>
                    <Toggle checked={true} handleChecked={offAllTeamNotif} />
                </div>
            </div>
            <div className={'notification-mid'}>
                <div className={'notification-mid-text'}>
                    Show notification from selected teams
                </div>
                <div className={'notification-mid-teams'}>
                    {TeamsData.map((team, i) => (
                        <div className={'notification-mid-teams-team'}>
                            <div className="notification-mid-teams-team-left">
                                <img src={team.avatar} alt={team.name}></img>
                                <div className="notification-mid-teams-team-left-name text-style--bold text-color--black">
                                    {team.name}
                                </div>
                            </div>

                            <input
                                type="checkbox"
                                onChange={(event) =>
                                    handleEachTeamNotif({
                                        ...team,
                                        checked: event.target.checked,
                                    })
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="notification-end">
                <div className="notification-end-postnotif">
                    <div
                        className="notification-end-postnotif-text text-style--bold text-color--black"
                        style={{ fontSize: '1.1rem', marginTop: '10px' }}
                    >
                        Post Notifications
                    </div>
                </div>
                <div className="notification-end-mentionNotif">
                    <div className="notification-end-mentionNotif-text text-color--black">
                        Show notificatoins when someone mentions you in a post
                    </div>
                    <Toggle checked={true} handleChecked={handleMentionNotif} />
                </div>
                <div className="notification-end-likesNotif">
                    <div className="notification-end-likesNotif-text text-color--black">
                        Show notifications when someone likes your post
                    </div>
                    <Toggle checked={true} handleChecked={handleLikesNotif} />
                </div>
                <div className="notification-end-commentsNotif">
                    <div className="notification-end-commentsNotif-text text-color--black">
                        Show notifications when someone comments on your post
                    </div>
                    <Toggle
                        checked={true}
                        handleChecked={handleCommentsNotif}
                    />
                </div>
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
                    onClick={() => props.saveDataToServer()}
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}
export default Notifications
