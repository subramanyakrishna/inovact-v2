import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import LandingPage from './components/landingPage/LandingPage'
import UserInfo from './components/userInfoForm/UserInfoForm'
import Feed from './components/feed/Feed'

function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/userinfo" exact component={UserInfo} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/feed" exact component={Feed} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
