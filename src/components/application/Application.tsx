import React from 'react'
import Feed from 'components/application/components/feed/Feed'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NavBar from 'components/application/components/NavBar'

function Application() {
    return (
        <div className="application">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                </Switch>
            </Router>
        </div>
    )
}

export default Application
