import React, { useState } from 'react'
import logo from 'images/logo/inovactlogo.png'
import Card from 'components/authentication/signup/Card'

const Signup = (props: any) => {
    return (
        <div className="signup">
            <div className="signup__flex-container">
                <div className="signup__flex-child">
                    <img
                        src={logo}
                        alt="inovact-logo"
                        className="signup__logo"
                    />
                </div>
                <div className="signup__flex-child">
                    <Card handleUserCredsChange={props.handleUserCredsChange} />
                </div>
            </div>
        </div>
    )
}

export default Signup
