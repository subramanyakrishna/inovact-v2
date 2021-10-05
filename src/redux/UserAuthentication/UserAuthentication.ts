import { AuthenticationDetails, CognitoUser,  } from "amazon-cognito-identity-js";

import userPool from "./UserPool";
import { store } from "redux/helpers/store";
import { userActions } from "redux/actions/user.actions";
import { userConstants } from "redux/actionTypes/userConstants";
import axios from "axios";

const userAuthentication = async (email: any, password: any)=>{
    const authenticationData = {
        Username: email,
        Password: password,
    }
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
        Username: email,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    store.dispatch({type: userConstants.LOGIN_REQUEST});
    cognitoUser.authenticateUser(authenticationDetails,{
        onSuccess: function(result){
            // const accessToken = result.getAccessToken().getJwtToken();
            // console.log("result from aws: ",result);
            store.dispatch({
                type: userConstants.LOGIN_SUCCESS, 
                user: {}
            });
            // localStorage.setItem("user", accessToken);
            // console.log(store.getState());
            // console.log(result);
            const currentUser: any = userPool;
            // console.log(currentUser);
            localStorage.setItem("user",result.getIdToken().getJwtToken());
            axios.get("https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user?id=15",{
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
                })

            }).catch((err)=>console.log(err));
            
            console.log("user Pool data: ",currentUser.storage.user);
        },
        onFailure: function(err){
            console.log(err);
            store.dispatch({
                type: userConstants.LOGIN_FAILURE,
                message: err.message,
            });
        }
    })
}

export default userAuthentication;