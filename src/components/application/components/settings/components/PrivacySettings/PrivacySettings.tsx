import React, { useEffect, useState } from 'react'
import Toggle from '../Toggle/Toggle'
import { useDispatch, useSelector } from 'react-redux'
// import {
//     updateBlockedUser,
//     updateRestrictedUser,
// } from 'redux/actions/blockedRestrictedAccounts.action'
import cognitoUserClass from 'cognitoUserClass/cognitoUserClass'

const PrivacySettings: React.FC<any> = ({
    handleUserInfoChange,
    saveDataToServer,
}: any) => {
    const is_public = useSelector((state: any) => state.userInfo.is_public)
    const [currentPswd, setCurrentPswd] = useState<string>('')
    const [newPswd, setNewPswd] = useState<string>('')
    const [rePswd, setRePswd] = useState<string>('')
    const [verificationCode, setVerificationCode] = useState<string>('')
    const [showVerificationInput, setShowVerificationInput] =
        useState<boolean>(false)
    const [verificationCodeMsg, setVerificationCodeMessage] = useState('')
    const [isPswdNotMathching, setIsPswdNotMathching] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [showSubmitVerificationCode, setShowSubmitVerificationCode] =
        useState(false)
    const [showVerificationCodeMessage, setshowVerificationCodeMessage] =
        useState<boolean>(false)
    const dispath = useDispatch()
    const userInfo = useSelector((state: any) => state.userInfo)

    const blockedUsers = useSelector(
        (state: any) => state.blockedAndRestricted.blocked_users
    )
    const restrictedUsers = useSelector(
        (state: any) => state.blockedAndRestricted.restricted_users
    )

    useEffect(() => {
        // const blockedUsersIds = userInfo.blocked_users
        // if (blockedUsersIds.length) {
        //     const blocked_users_data = blockedUsersIds.map((_id: any) => {
        //         //call the user Endpoint using id
        //         const user = {
        //             id: _id,
        //             first_name: 'John',
        //             last_name: 'dev' + Math.random().toString().substring(2, 4),
        //             user_name: 'john_dev',
        //             avatar: 'https://bit.ly/3EKg3dQ',
        //             designation:
        //                 'ReactJs Developer' +
        //                 Math.random().toString().substring(2, 4),
        //         }
        //         return {
        //             id: _id,
        //             name: user.first_name + ' ' + user.last_name,
        //             avatar: user.avatar,
        //             designation: user.designation,
        //         }
        //     })
        //     dispath(updateBlockedUser(blocked_users_data))
        // }
        // const restrictedUsersIds = userInfo.restricted_users
        // if (restrictedUsersIds.length) {
        //     const restricted_users_data = restrictedUsersIds.map((_id: any) => {
        //         //call the user Endpoint using id
        //         const user = {
        //             id: _id,
        //             first_name: 'John',
        //             last_name: 'dev' + Math.random().toString().substring(2, 4),
        //             user_name: 'john_dev',
        //             avatar: 'https://bit.ly/3EKg3dQ',
        //             designation:
        //                 'ReactJs Developer' +
        //                 Math.random().toString().substring(2, 4),
        //         }
        //         return {
        //             id: _id,
        //             name: user.first_name + ' ' + user.last_name,
        //             avatar: user.avatar,
        //             designation: user.designation,
        //             spanAfterConnection: '10 min', //ask how to do this
        //         }
        //     })
        //     dispath(updateRestrictedUser(restricted_users_data))
        // }
    }, [])

    const handleForgotPassWord = () => {
        console.log('forget password clicked')
        if (rePswd === '' || newPswd === '') {
            setErrorMsg('please enter all fields')
            setIsPswdNotMathching(true)
        } else if (rePswd != newPswd) {
            setErrorMsg('passwords not matching')
            setIsPswdNotMathching(true)
        } else {
            setShowVerificationInput(true)
            setShowSubmitVerificationCode(true)
            cognitoUserClass.forgotPassword(userInfo.user_name)
        }
    }

    // const handleblockedUsersUnBlock = (idOfUnblockedAccount: any) => {
    //     handleUserInfoChange(
    //         'blocked_users',
    //         userInfo.blocked_users.filter(
    //             (id: any) => id !== idOfUnblockedAccount
    //         )
    //     )
    //     dispath(
    //         updateBlockedUser(
    //             blockedUsers.filter(
    //                 (user: any) => user.id !== idOfUnblockedAccount
    //             )
    //         )
    //     )
    // }
    // const handlerestrictedusersUnRestrict = (
    //     idOfUnRestrictedAccount: string
    // ) => {
    //     handleUserInfoChange(
    //         'restricted_users',
    //         userInfo.restricted_users.filter(
    //             (id: any) => id !== idOfUnRestrictedAccount
    //         )
    //     )
    //     dispath(
    //         updateRestrictedUser(
    //             restrictedUsers.filter(
    //                 (user: any) => user.id !== idOfUnRestrictedAccount
    //             )
    //         )
    //     )
    // }
    const handleMakeProfilePublic = (checked: any) => {
        handleUserInfoChange('is_public', checked)
    }
    const handleSubmitVerificationCode = async () => {
        if (verificationCode !== '') {
            setShowSubmitVerificationCode(false)
            setShowVerificationInput(false)
            const res = await cognitoUserClass.confirmPassword(
                verificationCode,
                newPswd
            )
            console.log('res res', res)
            if (res != 'SUCCESS') {
                setVerificationCodeMessage('NOT_MATCHING')
            } else {
                setVerificationCodeMessage('SUCCESS')
            }
            setshowVerificationCodeMessage(true)
        }
    }
    return (
        <div className={'privacy-settings'}>
            <div className="privacy-settings-pswd">
                <div className="privacy-settings-pswd-head paragraph-primary text-style--bold text-color--black">
                    Password
                </div>
                <div className="privacy-settings-pswd-inputs">
                    {/* <div className="privacy-settings-pswd-inputs-curr">
                        <label htmlFor="currentPswd">Current Password</label>
                        <input
                            type="password"
                            id="currentPswd"
                            onChange={(e) => setCurrentPswd(e.target.value)}
                        />
                    </div> */}
                    <div className="privacy-settings-pswd-inputs-new">
                        <div className="privacy-settings-pswd-inputs-new-ori">
                            <label htmlFor="newPswd">Enter new Password</label>
                            <input
                                type="password"
                                id="newPswd"
                                onChange={(e) => setNewPswd(e.target.value)}
                                onInput={() => {
                                    setIsPswdNotMathching(false)
                                    setShowVerificationInput(false)
                                    setshowVerificationCodeMessage(false)
                                }}
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
                                onInput={() => {
                                    setIsPswdNotMathching(false)
                                    setShowVerificationInput(false)
                                    setshowVerificationCodeMessage(false)
                                }}
                            />
                            {isPswdNotMathching && (
                                <span style={{ color: 'red' }}>{errorMsg}</span>
                            )}
                        </div>

                        {showVerificationInput ? (
                            <div
                                className="privacy-settings-pswd-inputs-new-ori"
                                style={{ marginTop: '10px' }}
                            >
                                <label
                                    htmlFor="verificationCode"
                                    style={{ marginBottom: '5px' }}
                                >
                                    Enter Verification code sent to your mail
                                </label>
                                <input
                                    id="verificationCode"
                                    onChange={(e) =>
                                        setVerificationCode(e.target.value)
                                    }
                                    onInput={() => {
                                        setshowVerificationCodeMessage(false)
                                    }}
                                />
                            </div>
                        ) : undefined}
                        {showVerificationCodeMessage && (
                            <span
                                style={{
                                    color: `${
                                        verificationCodeMsg == 'SUCCESS'
                                            ? 'green'
                                            : 'red'
                                    }`,
                                }}
                            >
                                {verificationCodeMsg == 'SUCCESS'
                                    ? 'Password change successfull'
                                    : 'Enter valid verification code'}
                            </span>
                        )}
                    </div>
                </div>
                <div className="privacy-settings-pswd-change">
                    {/* <button
                        className={
                            'privacy-settings-pswd-change-btn text-color--white'
                        }
                        onClick={() => handlePswdChangeSubmit()}
                    >
                        Change Password
                    </button> */}
                    <div
                        className={
                            'privacy-settings-pswd-change-fpswd text-color--green  text-style-bold'
                        }
                        onClick={() =>
                            showSubmitVerificationCode
                                ? handleSubmitVerificationCode()
                                : handleForgotPassWord()
                        }
                    >
                        {showSubmitVerificationCode
                            ? 'Submit Verification code'
                            : 'Change Password'}
                    </div>
                </div>
            </div>
            <div className={'privacy-settings-mid'}>
                {/* <div className={'privacy-settings-mid-block'}>
                    <div
                        className={
                            'paragraph-primary text-style--bold text-color--black'
                        }
                        style={{ marginBottom: '10px' }}
                    >
                        Blocked Users
                    </div>
                    <div className={'privacy-settings-mid-block-box'}>
                        {blockedUsers.map((user: any, i: any) => (
                            <User
                                key={i}
                                user={user}
                                handleClick={handleblockedUsersUnBlock}
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
                        {restrictedUsers.map((user: any, i: any) => (
                            <User
                                key={i}
                                user={user}
                                handleClick={handlerestrictedusersUnRestrict}
                                rightText={'Unrestrict'}
                            />
                        ))}
                    </div>
                </div> */}
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
                        checked={is_public}
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

export default PrivacySettings
