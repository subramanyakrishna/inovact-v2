import React,{useState} from 'react'
import facebook from 'images/sign-up/facebook.png'
import google from 'images/sign-up/google.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';
import userPool from 'UserPool';
interface Props {
 
}

const Card: React.FC<Props> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = (e :any) => {
        const attributeList : any= [];
        e.preventDefault();
        userPool.signUp(email, password, attributeList, null , (err, data) => {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log(data);
          });
      };

    return (
        <div className="signup__card">
            <span className="signup__card--header ">Create an Account</span>
            <div className="signin__card--desc">
                <span className="text-style--light text-align--left text-size--small">Already have an account?</span>
                <Link to="/login" className="text-style--bold text-align--left text-size--small text-color--green" style={{marginLeft:'2px'}}>Login</Link>
            </div>
            <div className="signup__card--form">
                <form onSubmit={signup}>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input-component"
                                    placeholder="Enter Email Id"
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
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="confirm-password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    className="input-component"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                           
                                <button type="submit" className="button--green button--green--round signup__card--button">
                                    Sign Up
                                </button>
                           
                        </MDBCol>
                    </MDBRow>
                    <hr />
                </form>
            </div>
            <div className="signup__card--or">OR</div>
            <div className="signup__social">
                <a href="/" className="signup__social--links">
                    <img
                        src={google}
                        alt=""
                        className="signup__social--links"
                    ></img>
                </a>
                <a href="/" className="signup__social--links">
                    <img
                        src={facebook}
                        alt=""
                        className="signup__social--links"
                    ></img>
                </a>
            </div>
        </div>
    )
}

export default Card
