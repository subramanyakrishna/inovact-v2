import React, {useState} from 'react'
import name from 'images/sign-up/name.png'
import Card from 'components/authentication/signup/Card'

const Signup = (props: any) => {
    console.log("signup", props);
    return (
        <div className="signup">
            <div className="signup__flex-container">
                <div className="signup__flex-child">
                    <img
                        src={name}
                        alt="inovact-logo"
                        className="signup__logo"
                    />
                </div>
                <div className="signup__flex-child">
                    <Card handleUserCredsChange={props.handleUserCredsChange}/>
                </div>
            </div>
        </div>
    )
}

export default Signup
