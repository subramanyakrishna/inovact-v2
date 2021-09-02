import React from 'react'
import Feed from 'components/application/components/feed/Feed'
import NavBar from 'components/application/components/NavBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Connections from 'components/application/components/connections/Connections'
import Profile from './components/profile/Profile'
import Teams from './components/teams/Teams'
import Notifications from './components/notifications/Notifications'
import Settings from './components/settings/Settings'
import Messages from './components/messages/Messages'

function Application() {
    return (
        <div className="application">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                    <Route path="/connections" exact component={Connections} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/teams" component={Teams} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/messages" component={Messages} />
                </Switch>
            </Router>
        </div>
    )
}

export default Application
