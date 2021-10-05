import React from 'react'
import Feed from 'components/application/components/feed/Feed'
import NavBar from 'components/application/components/NavBar'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Connections from 'components/application/components/connections/Connections'
import Profile from './components/profile/Profile'
import Teams from './components/teams/Teams'
import Notifications from './components/notifications/Notifications'
import Settings from './components/settings/Settings'
import Messages from './components/messages/Messages'
import { useSelector } from 'react-redux'
import  {
    handleUserCredsChange,
    handleUserInfoChange
} from "../../StateUpdateHelper";
import CheckoutPage from 'components/authentication/userInfoForm/Info/CheckoutPage'
function Application() {
    const state = useSelector((state: any)=>state);
    return (
        <div className="application">
            <Router>
                {
                    !state.authentication.userAuthenticated && state.authentication.user.profile_complete &&
                    <Redirect to="/userinfo"/>
                }
                { state.authentication.user.profile_complete && <NavBar />}
                <Switch>
                    <Route path="/feed" exact component={Feed} />
                    <Route path="/connections" exact component={Connections} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/teams" component={Teams} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/userinfo" exact render={()=> <CheckoutPage handleChange={handleUserInfoChange} userInfo ={state.userInfo}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Application
