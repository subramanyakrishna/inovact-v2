import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/signup/Signup'
import SignupForm from './components/SignupForm'

function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/form" component={SignupForm} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
