import React, {useState} from 'react'
import facebook from 'images/sign-up/facebook.png'
import google from 'images/sign-up/google.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import userAuthentication from "redux/UserAuthentication/UserAuthentication";
import { useDispatch, useSelector } from 'react-redux';
import { userConstants } from 'redux/actionTypes/userConstants';
import { Redirect } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
interface Props {}

const Card: React.FC<Props> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e: any)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: any)=>{
        setPassword(e.target.value);
    }
    const dispatch = useDispatch();
    const state = useSelector((state: any)=> state);
    const history = useHistory();
    const signin = async (e: any)=>{
        e.preventDefault();
        console.log(email, password);
        dispatch({type: userConstants.LOGIN_REQUEST});
        userAuthentication(email, password);
    }

    return (
        <div className="signin__card">
            <span className="signin__card--header">Sign in</span>
            <div className="signin__card--desc">
                <span className="text-style--light text-align--left text-size--small">New user?</span>
                <a href="./signup" className="text-style--bold text-align--left text-size--small">Create an account</a>
            </div>
            <div className="signin__card--form">
                <form onSubmit={signin}>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input-component"
                                    placeholder="Enter Email Id"
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input-component"
                                    placeholder="Enter Password"
                                    onChange={handlePasswordChange}
                                />
                                
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                            {/* <Link to="/feed"> */}
                                <button className="button--green button--green--round signup__card--button" >
                                    Sign In
                                </button>
                            
                            {/* </Link> */}
                                
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="12" className="signin__card__forgot-pw-div">
                            <a
                                href="/forgotpassword"
                                className="signin__card__forgot-pw"
                            >
                                Forgot password?
                            </a>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                </form>
            </div>
            <div className="signin__card--or">OR</div>
            <div className="signin__social">
                <a href="/" className="signin__social--links">
                    <img
                        src={google}
                        alt=""
                        className="signin__social--links"
                    ></img>
                </a>
                <a href="/" className="signin__social--links">
                    <img
                        src={facebook}
                        alt=""
                        className="signin__social--links"
                    ></img>
                </a>
            </div>
        </div>
    )
}

export default Card
