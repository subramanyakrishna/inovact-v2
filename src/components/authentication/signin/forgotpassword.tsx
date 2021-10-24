import cognitoUserClass from 'forgotPassword/forgotPassword'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const ForgotPassword = () => {
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [showForgotPasswordSubmit, setShowForgotPasswordSubmit] =
        useState<boolean>(false)
    const [showVerificationCode, setShowVerificationCode] =
        useState<boolean>(false)
    const [verificationCode, setVerificationCode] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [showError, setShowError] = useState<boolean>(false)
    const history = useHistory()
    const handleSendVerificationCode = () => {
        if (password === '' || rePassword === '' || username === '') {
            setError('please enter all the fields')
            setShowError(true)
        }
        if (password !== rePassword) {
            setError('passwords not matching')
            setShowError(true)
        } else {
            setShowVerificationCode(true)
            setShowForgotPasswordSubmit(true)
            cognitoUserClass.forgotPassword(username)
        }
    }
    const handleChangePassword = async () => {
        if (verificationCode === '') {
            setError('Please enter varification code')
            setShowError(true)
        } else {
            setShowVerificationCode(false)
            setShowForgotPasswordSubmit(false)
            const res = await cognitoUserClass.confirmPassword(
                verificationCode,
                password
            )
            if (res == 'SUCCESS') {
                setError('SUCCESS')
                setShowError(true)
            } else {
                setError('Please enter valid verification code')
            }
        }
    }
    return (
        <div className="user-info">
            <div className="user-info__card">
                <div className="forgot-password">
                    <div className="forgot-password__header">
                        <h6 className="text-style--bold text-size--big sm-small text-align--center">
                            A mail has been sent to your registered mail ID
                        </h6>
                        <p className="text-style--bold text-color--green text-size--small sm-small text-align--center">
                            Kindly confirm your identity through the mail to
                            reset your password
                        </p>
                    </div>
                    <div className="forgot-password__form">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            className="input-component"
                            onInput={() => setShowError(false)}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">New Password </label>
                        <input
                            id="password"
                            className="input-component"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onInput={() => setShowError(false)}
                        />
                        <label htmlFor="repassword">Confirm Password </label>
                        <input
                            id="repassword"
                            className="input-component"
                            type="password"
                            onChange={(e) => setRePassword(e.target.value)}
                            onInput={() => setShowError(false)}
                        />
                        {showVerificationCode && (
                            <>
                                <label htmlFor="verificationCode">
                                    Enter verification code
                                </label>
                                <input
                                    id="verificationCode"
                                    className="input-component"
                                    onChange={(e) =>
                                        setVerificationCode(e.target.value)
                                    }
                                    onInput={() => setShowError(false)}
                                />
                            </>
                        )}
                        {showError && (
                            <span
                                style={{
                                    color: `${
                                        error == 'SUCCESS' ? 'green' : 'red'
                                    }`,
                                }}
                            >
                                {error == 'SUCCESS'
                                    ? 'Password change Successfull'
                                    : error}
                            </span>
                        )}
                    </div>
                    <button
                        className="button--green"
                        onClick={() =>
                            showForgotPasswordSubmit
                                ? handleChangePassword()
                                : error == 'SUCCESS'
                                ? history.push('/login')
                                : handleSendVerificationCode()
                        }
                    >
                        {showForgotPasswordSubmit
                            ? 'Change password'
                            : error == 'SUCCESS'
                            ? 'Go to Login Page'
                            : 'Send verification code'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword
