import React, { useEffect, useState } from 'react'
import Feed from 'components/application/components/feed/Feed'
import NavBar from 'components/application/components/NavBar'
import { Route, BrowserRouter as Router, Switch, Redirect, useHistory } from 'react-router-dom'
import Connections from 'components/application/components/connections/Connections'
import Profile from './components/profile/Profile'
import Teams from './components/teams/Teams'
import Notifications from './components/notifications/Notifications'
import Settings from './components/settings/Settings'
import Messages from './components/messages/Messages'
import { useDispatch, useSelector } from 'react-redux'
import  {
    handleUserCredsChange,
    handleUserInfoChange
} from "../../StateUpdateHelper";
import CheckoutPage from 'components/authentication/userInfoForm/Info/CheckoutPage';
import { userConstants } from 'redux/actionTypes/userConstants'
import axios from 'axios'
import { userCredsConstants } from 'redux/actionTypes/userCredsConstants'
import PrivateRoute from '../../PrivateRoute';
import userDataConstants from 'redux/actionTypes/userDataConstants'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'
import PostPage from './components/postpage/PostPage'




function Application() {
    const state = useSelector((state: any)=>state);
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("user")){
            // dispatch({type: userConstants.LOGIN_SUCCESS, user: {
            //     profile_completed: false;
            // }})
            axios.get("https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user",{
                   headers: {
                    "Authorization": localStorage.getItem("user"),
                  } 
                }
                ).then(async(resp: any)=>{
                    console.log("user api call:",resp);
                    dispatch({
                        type: userConstants.LOGIN_SUCCESS,
                        user: {
                            profile_complete: resp.data.data.user[0].profile_complete
                        },
                    });
                    (async()=>{
                        dispatch({
                        type: userInfoConstants.UPDATE_COMPLETE_PROFILE,
                        data: resp.data.data.user[0]
                        });
                    })().then(()=>{
                        if(!(state.userInfo.profile_complete)){
                        console.log(state.userInfo.profile_complete);
                        history.push("/userinfo");
                        alert("Your profile is not complete, please complete it by giving the following information.");
                    }
                    });
                }).then(()=>{
                    console.log("profile status: ",state.userInfo.profile_complete);
                    
                }).catch((err)=>{
                    console.log(err);
                    alert(err.message);
                    history.push("/login");
                });
        }else{
            history.push("/login");
        }
    },[]);
    // console.log(state);
    return (
        <div className="application">
            <Router>
                
                {   
                    state.authentication.userAuthenticated && 
                    state.authentication.user.profile_complete && 
                    <NavBar />
                }
                <Switch>
                    <PrivateRoute path="/feed" isAuth={state.authentication.userAuthenticated} component={Feed} />
                    <PrivateRoute path="/connections" isAuth={state.authentication.userAuthenticated} component={Connections} />
                    <PrivateRoute path="/profile" isAuth={state.authentication.userAuthenticated} component={Profile} />
                    <PrivateRoute path="/teams" isAuth={state.authentication.userAuthenticated} component={Teams} />
                    <PrivateRoute path="/notifications" isAuth={state.authentication.userAuthenticated} component={Notifications} />
                    <PrivateRoute path="/settings" isAuth={state.authentication.userAuthenticated} component={Settings} />
                    <PrivateRoute path="/messages" isAuth={state.authentication.userAuthenticated} component={Messages} />
                    <PrivateRoute path="/userinfo" isAuth={state.authentication.userAuthenticated} component={()=> <CheckoutPage handleChange={handleUserInfoChange} userInfo ={state.userInfo}/>}/>
                    <PrivateRoute path="/:id" isAuth={state.authentication.userAuthenticated} component={()=><PostPage/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Application;
