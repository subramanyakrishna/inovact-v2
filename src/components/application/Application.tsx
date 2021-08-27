import React from 'react'
import Navbar from 'components/application/components/NavBar'
import Feed from 'components/application/components/feed/Feed'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function Application() {
    return (
        <div className="feed">
            <div className="feed__nav">
                <Navbar />
            </div>
            <Router>
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                </Switch>
            </Router>
        </div>
    )
}

export default Application
