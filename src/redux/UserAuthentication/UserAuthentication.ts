import { AuthenticationDetails, CognitoUser,  } from "amazon-cognito-identity-js";

import UserPool from "./UserPool";
import { store } from "redux/helpers/store";
import { userActions } from "redux/actions/user.actions";
import { userConstants } from "redux/actionTypes/userConstants";
import axios from "axios";
import userDataConstants from "redux/actionTypes/userDataConstants";
import { userInfoConstants } from "redux/actionTypes/userInfoConstants";

const userAuthentication = async (email: any, password: any)=>{
    const authenticationData = {
        Username: email,
        Password: password,
    }
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
        Username: email,
        Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData);
    store.dispatch({type: userConstants.LOGIN_REQUEST});
    cognitoUser.authenticateUser(authenticationDetails,{
        onSuccess: function(result){
            // const accessToken = result.getAccessToken().getJwtToken();
            // console.log("result from aws: ",result);
            // store.dispatch({
            //     type: userConstants.LOGIN_SUCCESS, 
            //     user: {
            //         profile_complete: false,
            //     }
            // });
            // localStorage.setItem("user", accessToken);
            // console.log(store.getState());
            // console.log(result);
            const currentUser: any = UserPool;
            console.log(currentUser.getCurrentUser());
            localStorage.setItem("user",result.getIdToken().getJwtToken());
            axios.get("https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user?id=26",{
               headers: {
                "Authorization": currentUser.storage.user,
              } 
            }
            ).then((resp: any)=>{
                console.log("user api call:",resp);
                store.dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    user: {
                        profile_complete: resp.data.data.user[0].profile_complete
                    },
                });
                store.dispatch({
                    type: userInfoConstants.UPDATE_COMPLETE_PROFILE,
                    data: resp.data.data.user[0],
                })
                console.log(store.getState());

            }).catch((err)=>console.log(err));
            
            console.log("user Pool data: ",currentUser.storage.user);
        },
        onFailure: function(err){
            console.log(err);
            store.dispatch({
                type: userConstants.LOGIN_FAILURE,
                message: err.message,
            });
            // localStorage.removeItem("user");
            localStorage.clear();
            return  new Error("authentication failure");
        }
    })
}

export default userAuthentication;