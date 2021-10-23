import React, { useState, useEffect } from 'react'
import SettingsLeft from './components/SettingsLeft.tsx/SettingsLeft'
import MenuIcon from '@material-ui/icons/Menu'
import back from 'images/teams/back.svg'
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import Notifications from './components/Notifications/Notifications'
import Faq from './components/Faq/Faq'
import YourProfile from './components/YourProfile/YourProfile'
import LogOutModal from './components/modals/LogOutModal'
import DeleteTeamModal from './components/modals/DeleteTeamModal'
import DeleteAccountModal from './components/modals/DeleteAccountModal'
import TeamSettings from './components/TeamSettings/TeamSettings'
import { useDispatch, useSelector } from 'react-redux'
import { handleUserInfoChange } from '../../../../StateUpdateHelper'
import { updateTeamWithAdminAccessAction } from 'redux/actions/teamWIthAdminAccessActions'
import axios from 'axios'
import { useHistory } from 'react-router'

const options: { name: string; main: string; sub: string }[] = [
    {
        name: 'profile',
        main: 'Your Profile',
        sub: 'Details about your account',
    },
    {
        name: 'privacysettings',
        main: 'Privacy Settings',
        sub: 'Control who views your account',
    },
    { name: 'team', main: 'Team Settings', sub: 'Manage team acess' },
    {
        name: 'notifications',
        main: 'Notifications',
        sub: 'Change notification settings',
    },
    { name: 'privacypolicy', main: 'Privacy Policy', sub: '' },
    { name: 'faq', main: 'FAQ and Support ', sub: '' },
]

const Settings: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(0)

    const SIZE_LIMIT: number = 768

    const [showLeft, setShowLeft] = useState(true)
    const [showRight, setShowRight] = useState(true)
    const [showLogOut, setShowLogOut] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const [showDeleteTeam, setShowDeleteTeam] = useState(false)
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [selectedTeamToDelete, setSelectedTeamToDelete] = useState(-1)
    const team_with_admin_access_ids = useSelector(
        (state: any) => state.userInfo.team_with_admin_access
    )
    const team_with_admin_access_data = useSelector(
        (state: any) => state.teamWithAdminAccess.teamWithAdminAccess
    )
    const userInfo = useSelector((state: any) => state.userInfo)
    console.log(userInfo)
    const dispath = useDispatch()
    const history = useHistory()

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])
    const saveDataToServer = async () => {
        await axios
            .put(
                'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user',
                userInfo,
                {
                    headers: {
                        Authorization: localStorage.getItem('user'),
                    },
                }
            )
            .then((resp: any) => console.log(resp))
            .catch((err: any) => console.log(err))
    }
    useEffect(() => {
        if (width > SIZE_LIMIT) {
            setShowLeft(true)
            setShowRight(true)
        } else {
            setShowLeft(false)
            setShowRight(true)
        }
    }, [width])

    const onSelection = (selection: number) => {
        setSelectedOption(selection)
        if (width < SIZE_LIMIT) {
            setShowLeft(!showLeft)
            setShowRight(!showRight)
        }
    }
    const openModal = () => {
        setShowOverlay(true)
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden'
    }
    const closeModal = () => {
        setShowOverlay(false)
        setShowLogOut(false)
        setShowDeleteTeam(false)
        setShowDeleteAccount(false)
        document.body.style.overflow = 'scroll'
    }
    const logOut = () => {
        openModal()
        setShowLogOut(true)
    }
    const logOutyes = () => {
        localStorage.clear()
        history.push('/login')
        window.location.reload()
        closeModal()
    }
    const deleteTeam = (id: number) => {
        setSelectedTeamToDelete(id)
        openModal()
        setShowDeleteTeam(true)
    }
    const sendDeleteTeamRequest = () => {
        handleUserInfoChange(
            'team_with_admin_access',
            team_with_admin_access_ids.filter(
                (id: number) => id !== selectedTeamToDelete
            )
        )
        dispath(
            updateTeamWithAdminAccessAction(
                team_with_admin_access_data.filter((team: any) => {
                    return team.id !== selectedTeamToDelete
                })
            )
        )
        closeModal()
        setSelectedTeamToDelete(-1)
    }
    const deleteAccount = () => {
        openModal()
        setShowDeleteAccount(true)
    }
    return (
        <div>
            {showOverlay && (
                <div>
                    <div
                        className="modal-overlay-settings"
                        onClick={closeModal}
                    ></div>
                    {showLogOut && (
                        <LogOutModal
                            closeModal={closeModal}
                            logOutyes={logOutyes}
                        />
                    )}
                    {showDeleteTeam && (
                        <DeleteTeamModal
                            closeModal={closeModal}
                            sendDeleteTeamRequest={sendDeleteTeamRequest}
                        />
                    )}
                    {showDeleteAccount && (
                        <DeleteAccountModal closeModal={closeModal} />
                    )}
                </div>
            )}
            <div className={'settings'}>
                <div className={'settings-breadcrumb'}>
                    {width > SIZE_LIMIT && (
                        <div className={'settings-breadcrumb-pc'}>
                            &lt;&lt;Back to Profile
                        </div>
                    )}
                    {width < SIZE_LIMIT && (
                        <div className={'settings-breadcrumb-mobile'}>
                            <img src={back} alt="" />
                            <div className={' heading-secondary'}>
                                Account Settings
                            </div>
                            <MenuIcon
                                onClick={() => {
                                    setShowLeft(!showLeft)
                                    setShowRight(!showRight)
                                }}
                            />
                            <div />
                        </div>
                    )}
                    <div className="settings-main">
                        {showLeft && (
                            <div className={'settings-main-left'}>
                                <SettingsLeft
                                    selected={selectedOption}
                                    onSelection={onSelection}
                                    options={options}
                                    logOut={logOut}
                                    deleteAccount={deleteAccount}
                                />
                            </div>
                        )}

                        {showRight && (
                            <div className={'settings-main-right'}>
                                {selectedOption === 0 && (
                                    <YourProfile
                                        deleteAccount={deleteAccount}
                                        handleUserInfoChange={
                                            handleUserInfoChange
                                        }
                                        saveDataToServer={saveDataToServer}
                                    />
                                )}
                                {selectedOption === 1 && (
                                    <PrivacySettings
                                        handleUserInfoChange={
                                            handleUserInfoChange
                                        }
                                        saveDataToServer={saveDataToServer}
                                    />
                                )}
                                {selectedOption === 2 && (
                                    <TeamSettings
                                        deleteTeam={deleteTeam}
                                        handleUserInfoChange={
                                            handleUserInfoChange
                                        }
                                        saveDataToServer={saveDataToServer}
                                    />
                                )}
                                {selectedOption === 3 && (
                                    <Notifications
                                        saveDataToServer={saveDataToServer}
                                    />
                                )}
                                {selectedOption === 5 && <Faq />}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
