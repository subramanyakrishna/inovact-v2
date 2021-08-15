import React from 'react'
import facebook from '../../assets/sign-up/facebook.png'
import google from '../../assets/sign-up/google.png'

interface Props {
    
}

const Card : React.FC<Props> = (props) => {
    return (
        <div className="signin__card">
            <span className="signin__card--header">Sign in</span>
            <div className="signin__card--desc">
                <span>New user?</span>
                <a href="./signup">Create an account</a>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <div> 
                    <label htmlFor="email">Email Id</label>
                    <input type="text" name="email" className="input-component" placeholder="Enter Email Id"/>
                </div>    
                <div> 
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="input-component" placeholder="Enter Password"/>
                </div>    
                <button className="button--green button--green--round signin__card--button">Sign Up</button>
            </form>
            <a href="./signin" className="signin__card__forgot-pw">Forgot password?</a>
            <hr/> <span className="signin__card--or">OR</span>
            <div className="signin__social">
				<a href="/" className="signin__social--links">
					<img src={google} alt="" className="signin__social--links"></img>
				</a>
				<a href="/" className="signin__social--links">
					<img src={facebook} alt="" className="signin__social--links"></img>
				</a>
			</div>
        </div>
    )
}

export default Card
