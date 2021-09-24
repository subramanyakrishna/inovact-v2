import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import UserInfo from 'components/authentication/userInfoForm/UserInfoForm'
import Application from 'components/application/Application'
import Teams from 'components/application/components/teams/Teams'

function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/userinfo" exact component={UserInfo} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/feed" exact component={Application} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
