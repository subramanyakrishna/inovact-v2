import React from 'react'
import Feed from 'components/application/components/feed/Feed'
import NavBar from 'components/application/components/NavBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Teams from 'components/application/components/teams/Teams';

function Application() {
    return (
        <div className="application">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                    
                </Switch>
                <Route path="/teams" exact component={Teams} />
            </Router>
        </div>
    )
}

export default Application
