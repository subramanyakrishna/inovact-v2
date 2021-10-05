import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import UserInfo from 'components/authentication/userInfoForm/UserInfoForm'
import Application from 'components/application/Application'
import ForgotPassword from 'components/authentication/signin/forgotpassword'
import CheckoutPage from 'components/authentication/userInfoForm/Info/CheckoutPage'
import { useDispatch, useSelector } from 'react-redux'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'
import { userCredsConstants } from 'redux/actionTypes/userCredsConstants'
import PrivateRoute from 'PrivateRoute';
import  {
    handleUserCredsChange,
    handleUserInfoChange
} from "./StateUpdateHelper";

function MainComponent() {

    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });

    const state = useSelector((state: any)=>state);
    const dispatch = useDispatch();
    // const handleUserCredsChange = (name: any, value: any)=>{
    //     console.log(name, value);
    //     switch(name){
    //         case "email":
    //             setUserCreds({
    //                 ...userCreds,
    //                 email: value,
    //             });
    //             break;
    //         case "password":
    //             setUserCreds({
    //                 ...userCreds,
    //                 password: value,
    //             });
    //             break;
    //         default: console.log(name, value);
    //     }
    //     console.log(userCreds);
    // }
    useEffect(()=>{
        console.log(state);
    },[state]);
    // const handleUserCredsChange = (name: any, value: any)=>{
    //     switch(name){
    //         case "email_id":
    //             dispatch({type: userCredsConstants.UPDATE_EMAIL_ID, payload: value});
    //             break;
            
    //         case "password": 
    //             dispatch({type: userCredsConstants.UPDATE_PASSWORD, payload: value});
    //             break;
    //     }
    //     console.log(state);
    // }
    // const handleUserInfoChange = async (name: any, value: any)=>{
    //     console.log(name, value);
    //     switch(name){

    //         case "first-name": 
    //             dispatch({type: userInfoConstants.UPDATE_FIRSTNAME, payload: value});
    //             break;

    //         case "last-name": 
    //             dispatch({type: userInfoConstants.UPDATE_LASTNAME, payload: value});
    //             break;

    //         case "bio":
    //             dispatch({type: userInfoConstants.UPDATE_BIO, payload: value});
    //             break;

    //         case "avatar":
    //             dispatch({type: userInfoConstants.UPDATE_AVATAR, payload: value});
    //             break;

    //         case "email_id":
    //             dispatch({type: userInfoConstants.UPDATE_EMAIL_ID, payload: value});
    //             break;

    //         case "role" :
    //             dispatch({type: userInfoConstants.UPDATE_ROLE, payload: value});
    //             break;
            
    //         case "designation":
    //             dispatch({type: userInfoConstants.UPDATE_DESIGNATION, payload: value});
    //             break;

    //         case "organization":
    //             dispatch({type: userInfoConstants.UPDATE_ORGANIZATION, payload: value});
    //             break;
            
    //         case "organizational_role":
    //             dispatch({type: userInfoConstants.UPDATE_ORGANIZATIONAL_ROLE, payload: value});
    //             break;
            
    //         case "university": 
    //             dispatch({type: userInfoConstants.UPDATE_UNIVERSITY, payload: value});
    //             break;
            
    //         case "graduation-year":
    //             dispatch({type: userInfoConstants.UPDATE_GRADUATION_YEAR, payload: value});
    //             break;

    //         case "journey_start_date":
    //             dispatch({type: userInfoConstants.UPDATE_JOURNEY_START_DATE, payload: value});
    //             break;
            
    //         case "years_of_professional_experience": 
    //             dispatch({type: userInfoConstants.UPDATE_YEARS_OF_PROFESSIONAL_EXPERIENCE, payload: value});
    //             break;
    //         case "degree":
    //             dispatch({type: userInfoConstants.UPDATE_DEGREE, payload: value});
    //             break;
    //         case "area-of-interest":
    //             dispatch({
    //                 type: userInfoConstants.UPDATE_AOI,
    //                 payload: value,
    //             })
    //             break;
    //     }
    // }

    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    {/* <Route path="/userinfo" exact render={()=> <CheckoutPage handleChange={handleUserInfoChange} userCreds={userCreds} userInfo ={state.userInfo}/>}/> */}
                    <Route path="/signup" exact render={()=> <Signup handleUserCredsChange={handleUserCredsChange}/>} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/forgotpassword" exact component={ForgotPassword} />
                    {/* <Route path="/feed" exact component={Application}/> */}
                    <PrivateRoute path="/feed" component={Application}/>
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent;

/* <Route path="/feed" exact component={state.authentication.userAuthenticated?Application:Signin}/> */
                    {/* <PrivateRoute isAuthenticated={state.authentication.userAuthenticated} Component={Application}/> */}
                    {/* <Route path="/feed" exact render={()=> <PrivateRoute isAuthenticated= {state.authentication.userAuthenticated}/>}/> */}
                    {/* <PrivateRoute path="/feed" auth={state.authentication.userAuthenticated} component={Application}/> */}
                    {/* <PrivateRoute
                        isAuthenticated={state.authentication.userAuthenticated}
                        path="/feed"
                        exact
                        component={<Application />}
                    /> */}
                    {/* <Redirect to="/login" /> */}