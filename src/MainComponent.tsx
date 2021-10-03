import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import UserInfo from 'components/authentication/userInfoForm/UserInfoForm'
import Application from 'components/application/Application'
import ForgotPassword from 'components/authentication/signin/forgotpassword'
import CheckoutPage from 'components/authentication/userInfoForm/Info/CheckoutPage'

function MainComponent() {
    interface userinfo{
        role: string,
        firstName: string,
        lastName: string,
        college: string,
        degree: string,
        yearOfGraduation: string,
        areasOfInterest: string[],
        bio: string,
    }
    const [userInfo, setUserInfo] = useState<userinfo>({
        role: "Student",
        firstName: "",
        lastName: "",
        college: "",
        degree: "",
        yearOfGraduation: "",
        areasOfInterest: [],
        bio: "",
    });
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });
    const handleUserCredsChange = (name: any, value: any)=>{
        console.log(name, value);
        switch(name){
            case "email":
                setUserCreds({
                    ...userCreds,
                    email: value,
                });
                break;
            case "password":
                setUserCreds({
                    ...userCreds,
                    password: value,
                });
                break;
            default: console.log(name, value);
        }
        console.log(userCreds);
    }
    const handleUserInfoChange = (name: any, value: any)=>{
        console.log(name, value);
        switch(name){
            // case "email": setUserInfo({
            //                 ...userInfo,
            //                 email: value,
            //             });
            //             break;
            
            // case "password": setUserInfo({
            //     ...userInfo,
            //     password: value
            // });
            // break;

            case "role": setUserInfo({
                ...userInfo,
                role: value,
            });
            break;
            
            case "first-name": setUserInfo({
                ...userInfo,
                firstName: value,
            })
            break;

            case "last-name": setUserInfo({
                ...userInfo,
                lastName: value,
            });
            break;

            case "college": setUserInfo({
                ...userInfo,
                college: value,
            })
            break;

            case "degree": setUserInfo({
                ...userInfo,
                degree: value,
            });
            break;

            case "year-of-graduation": setUserInfo({
                ...userInfo,
                yearOfGraduation: value,
            });
            break;

            case "area-of-interest": 
            setUserInfo({
                ...userInfo,
                areasOfInterest: value,
            });
            break; 

            case "bio":
                setUserInfo({
                    ...userInfo,
                    bio : value
                })
            break;
        }
        console.log(userInfo);
    }
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/userinfo" exact render={()=> <CheckoutPage handleChange={handleUserInfoChange} userInfo={userInfo} userCreds={userCreds}/>}/>
                    <Route path="/signup" exact render={()=> <Signup handleChange={handleUserCredsChange} />} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/forgotpassword" exact component={ForgotPassword} />
                    <Route path="/feed" exact component={Application} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
