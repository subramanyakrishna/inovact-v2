import React, { useState } from 'react'
import User from './User/User'
import Toggle from '../Toggle/Toggle'
import { accounts } from './tempData'

const PrivacySettings: React.FC = () => {
    const [currentPswd, setCurrentPswd] = useState<string>('')
    const [newPswd, setNewPswd] = useState<string>('')
    const [rePswd, setRePswd] = useState<string>('')
    const [blockedUser, setBlockedUser] = useState(accounts)
    const [restrictedUser, setRestrictedUser] = useState(accounts)
    const [makeProfilePublic, setMakeProfilePublic] = useState(false)
    const handlePswdChangeSubmit = () => {
        console.log(' password changed clicked')
    }
    const handleForgotPassWord = () => {
        console.log('forget password clicked')
    }

    const handleBlockedUserUnBlock = (_id: string) => {
        console.log('Unblock', _id)
    }
    const handleRestrictedUserUnRestrict = (_id: string) => {
        console.log('UnRestrict', _id)
    }
    const handleMakeProfilePublic = (checked: any) => {
        console.log('Profile Public Handling, ', checked)
    }
    return (
        <div className={'privacy-settings'}>
            <div className="privacy-settings-pswd">
                <div className="privacy-settings-pswd-head paragraph-primary text-style--bold text-color--black">
                    Password
                </div>
                <div className="privacy-settings-pswd-inputs">
                    <div className="privacy-settings-pswd-inputs-curr">
                        <label htmlFor="currentPswd">Current Password</label>
                        <input
                            type="password"
                            id="currentPswd"
                            onChange={(e) => setCurrentPswd(e.target.value)}
                        />
                    </div>
                    <div className="privacy-settings-pswd-inputs-new">
                        <div className="privacy-settings-pswd-inputs-new-ori">
                            <label htmlFor="newPswd">Enter new Password</label>
                            <input
                                type="password"
                                id="newPswd"
                                onChange={(e) => setNewPswd(e.target.value)}
                            />
                        </div>
                        <div className="privacy-settings-pswd-inputs-new-re">
                            <label htmlFor="rePswd">
                                Re-enter new Password
                            </label>
                            <input
                                type="password"
                                id="rePswd"
                                onChange={(e) => setRePswd(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="privacy-settings-pswd-change">
                    <button
                        className={
                            'privacy-settings-pswd-change-btn text-color--white'
                        }
                        onClick={() => handlePswdChangeSubmit()}
                    >
                        Change Password
                    </button>
                    <div
                        className={
                            'privacy-settings-pswd-change-fpswd text-color--green  text-style-bold'
                        }
                        onClick={() => handleForgotPassWord()}
                    >
                        Forgot Password
                    </div>
                </div>
            </div>
            <div className={'privacy-settings-mid'}>
                <div className={'privacy-settings-mid-block'}>
                    <div
                        className={
                            'paragraph-primary text-style--bold text-color--black'
                        }
                        style={{ marginBottom: '10px' }}
                    >
                        Blocked Users
                    </div>
                    <div className={'privacy-settings-mid-block-box'}>
                        {blockedUser.map((user, i) => (
                            <User
                                key={i}
                                user={user}
                                handleClick={handleBlockedUserUnBlock}
                                rightText={'Unblock'}
                            />
                        ))}
                    </div>
                </div>
                <div className={'privacy-settings-mid-restrict'}>
                    <div
                        className={
                            'paragraph-primary text-style--bold text-color--black'
                        }
                        style={{ marginBottom: '10px' }}
                    >
                        Restricted Users
                    </div>
                    <div className={'privacy-settings-mid-block-box'}>
                        {restrictedUser.map((user, i) => (
                            <User
                                key={i}
                                user={user}
                                handleClick={handleRestrictedUserUnRestrict}
                                rightText={'Unrestrict'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={'privacy-settings-end'}>
                <div className={'privacy-settings-end-first'}>
                    <div
                        className={
                            'paragraph-primary text-style--bold text-color--black'
                        }
                    >
                        Make profile public
                    </div>
                    <Toggle
                        handleChecked={(e) =>
                            handleMakeProfilePublic(e.target.checked)
                        }
                    />
                </div>
                <div
                    className={
                        'privacy-settings-end-second  settings-left-sub text-size--small'
                    }
                >
                    Your profile will be visible to every user on the platform
                    even if they are not a connection
                </div>
            </div>
        </div>
    )
}

export default PrivacySettings
