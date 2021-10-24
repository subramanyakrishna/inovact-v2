import React, { useCallback, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import UserInfo from 'components/authentication/userInfoForm/UserInfoForm'
import Application from 'components/application/Application'
import ForgotPassword from 'components/authentication/signin/forgotpassword'
import CheckoutPage from 'components/authentication/userInfoForm/Info/CheckoutPage'
import { useDispatch, useSelector } from 'react-redux'
import PrivateRoute from 'PrivateRoute'
import {
    handleUserCredsChange,
    handleUserInfoChange,
} from './StateUpdateHelper'
import TeamChat from 'components/application/components/teams/teamChat'

function MainComponent() {
    const [userCreds, setUserCreds] = useState({
        email: '',
        password: '',
    })

    const state = useSelector((state: any) => state)
    const dispatch = useDispatch()

    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route
                        path="/userinfo"
                        exact
                        render={() => (
                            <CheckoutPage
                                handleChange={handleUserInfoChange}
                                userCreds={userCreds}
                                userInfo={state.userInfo}
                            />
                        )}
                    />
                    <Route
                        path="/signup"
                        exact
                        render={() => (
                            <Signup
                                handleUserCredsChange={handleUserCredsChange}
                            />
                        )}
                    />
                    <Route path="/login" exact component={Signin} />
                    <Route
                        path="/forgotpassword"
                        exact
                        component={ForgotPassword}
                    />
                    {/* <Route path="/feed" exact component={Application}/> */}
                    <PrivateRoute
                        path="/app"
                        isAuth={state.authentication.userAuthenticated}
                        component={Application}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
