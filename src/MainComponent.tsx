import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import SignupForm from './components/SignupForm'
import LandingPage from './components/landingPage/LandingPage'

function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/form" exact component={SignupForm} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
