import React from 'react'
import name from '../../assets/sign-up/name.png'
import Card from './Card'

const Signup : React.FC = () => {
    return (
        <div className="signin">
            <div className="signin__flex-container">
                <div className="signin__flex-child">
                    <img src={name} alt="inovact-logo" className="signup__logo"/>
                </div>
                <div className="signin__flex-child">
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Signup
