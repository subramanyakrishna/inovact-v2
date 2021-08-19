import React from 'react'
import facebook from '../../assets/sign-up/facebook.png'
import google from '../../assets/sign-up/google.png'

interface Props {
    
}

const Card : React.FC<Props> = (props) => {
    return (
        <div className="signup__card">
            <span className="signup__card--header">Create an Account</span>
            <div className="signup__card--desc">
                <span>Already have an account?</span>
                <a href="./signin">Sign in</a>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="signup__card--input-name"> 
                    <label htmlFor="first-name">First name</label>
                    <input type="text" name="first-name" className="input-component" placeholder="Enter First Name"/>
                </div>    
                <div className="signup__card--input-name"> 
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" name="last-name" className="input-component" placeholder="Enter Last Name"/>
                </div>    
                <div> 
                    <label htmlFor="email">Email Id</label>
                    <input type="text" name="email" className="input-component" placeholder="Enter Email Id"/>
                </div>    
                <div> 
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="input-component" placeholder="Enter Password"/>
                </div>    
                <div> 
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" className="input-component" placeholder="Confirm Password"/>
                </div>    
                <button className="button--green button--green--round signup__card--button">Sign Up</button>
            </form>
            <hr/> <span className="signup__card--or">OR</span>
            <div className="signup__social">
				<a href="/" className="signup__social--links">
					<img src={google} alt="" className="signup__social--links"></img>
				</a>
				<a href="/" className="signup__social--links">
					<img src={facebook} alt="" className="signup__social--links"></img>
				</a>
			</div>
        </div>
    )
}

export default Card
