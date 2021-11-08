import React, { useEffect } from 'react'
import logo from 'images/logo/inovactlogo.png'
import Card from 'components/authentication/signin/Card'

const Signup: React.FC = () => {
    useEffect(() => {
        localStorage.clear()
    }, [])
    return (
        <div className="signin">
            <div className="signin__flex-container">
                <div className="signin__flex-child">
                    <img
                        src={logo}
                        alt="inovact-logo"
                        className="signin__logo"
                    />
                </div>
                <div className="signin__flex-child">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Signup
