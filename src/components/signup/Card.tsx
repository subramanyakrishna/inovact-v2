import React from 'react'
import facebook from '../../assets/sign-up/facebook.png'
import google from '../../assets/sign-up/google.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'; 
interface Props {
    
}

const Card : React.FC<Props> = (props) => {
    return (
        <div className="signup__card">
            <span className="signup__card--header">Create an Account</span>
            <div className="signup__card--desc">
                <span>Already have an account?</span>
                <Link to="/login">Sign in</Link>
            </div>
            <div className="signup__card--form">
                <form onSubmit={(event) => event.preventDefault()}>
                    <MDBRow>
                        <MDBCol sm='6'>
                            <div className="form-group">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" name="first-name" className="input-component" placeholder="Enter First Name"/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <div className="form-group"> 
                                <label htmlFor="email">Last name</label>
                                <input type="text" name="last-name" className="input-component" placeholder="Enter Last Name"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12'>
                            <div className="form-group"> 
                                <label htmlFor="email">Email Id</label>
                                <input type="email" name="email" className="input-component" placeholder="Enter Email Id"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12'>
                            <div className="form-group"> 
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="input-component" placeholder="Enter Password"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12'>
                            <div className="form-group"> 
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" name="confirm-password" className="input-component" placeholder="Confirm Password"/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12'>
                        <Link to="/userinfo">
                            <button className="button--green button--green--round signup__card--button">Sign Up</button>
                        </Link>
                        </MDBCol>
                    </MDBRow>
                    <hr/>
                </form>
            </div>  
            <div className="signup__card--or">OR</div>
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
