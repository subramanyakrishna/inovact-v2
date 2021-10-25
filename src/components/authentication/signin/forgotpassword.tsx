import SmallSpinner from 'components/application/SmallSpinner'
import cognitoUserClass from 'cognitoUserClass/cognitoUserClass'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const ForgotPassword = () => {
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [showButtonCode, setShowButtonCode] = useState<string>(
        'SEND_VERIFICATION_CODE'
    )

    const [showVerificationCode, setShowVerificationCode] =
        useState<boolean>(false)
    const [verificationCode, setVerificationCode] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>()

    const history = useHistory()
    const handleSendVerificationCode = () => {
        if (password === '' || rePassword === '' || username === '') {
            setMessage('please enter all the fields')
            setShowMessage(true)
            setIsError(true)
        }
        if (password !== rePassword) {
            setMessage('passwords not matching')
            setShowMessage(true)
            setIsError(true)
        } else {
            setShowVerificationCode(true)
            setShowButtonCode('SUBMIT_VERIFICATION_CODE')
            setMessage(
                'Please submit the verification code sent to your registered mail'
            )
            setIsError(false)
            setShowMessage(true)
            cognitoUserClass.forgotPassword(username)
        }
    }
    const handleSubmitVerificationCode = async () => {
        if (verificationCode === '') {
            setMessage('Please enter varification code')
            setShowMessage(true)
            setIsError(true)
        } else {
            setShowButtonCode('LOADING')
            const res = await cognitoUserClass.confirmPassword(
                verificationCode,
                password
            )
            if (res == 'SUCCESS') {
                setMessage('Password change successful')
                setIsError(false)
                setShowMessage(true)
                setShowButtonCode('GO_TO_LOGIN')
                setShowVerificationCode(false)
            } else {
                setShowButtonCode('SUBMIT_VERIFICATION_CODE')
                setMessage('Please enter valid verification code')
                setIsError(true)
                setShowMessage(true)
            }
        }
    }
    const handleButtonClick = () => {
        if (showButtonCode == 'SEND_VERIFICATION_CODE')
            handleSendVerificationCode()
        if (showButtonCode == 'SUBMIT_VERIFICATION_CODE')
            handleSubmitVerificationCode()
        if (showButtonCode == 'GO_TO_LOGIN') history.push('/login')
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
                            onInput={() => setShowMessage(false)}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">New Password </label>
                        <input
                            id="password"
                            className="input-component"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onInput={() => setShowMessage(false)}
                        />
                        <label htmlFor="repassword">Confirm Password </label>
                        <input
                            id="repassword"
                            className="input-component"
                            type="password"
                            onChange={(e) => setRePassword(e.target.value)}
                            onInput={() => setShowMessage(false)}
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
                                    onInput={() => setShowMessage(false)}
                                />
                            </>
                        )}
                        {showMessage && (
                            <span
                                style={{
                                    color: `${isError ? 'red' : 'green'}`,
                                }}
                            >
                                {message}
                            </span>
                        )}
                    </div>
                    <button
                        className="button--green"
                        onClick={() => handleButtonClick()}
                    >
                        {showButtonCode == 'SEND_VERIFICATION_CODE' &&
                            'Send verification code'}
                        {showButtonCode == 'SUBMIT_VERIFICATION_CODE' &&
                            'Submit verification code'}
                        {showButtonCode == 'GO_TO_LOGIN' && 'Go to login'}
                        {showButtonCode == 'LOADING' && <SmallSpinner />}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword
