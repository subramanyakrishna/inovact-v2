import { AuthenticationDetails, CognitoUser,  } from "amazon-cognito-identity-js";

import userPool from "./UserPool";
import { store } from "redux/helpers/store";
import { userActions } from "redux/actions/user.actions";
import { userConstants } from "redux/actionTypes/userConstants";

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
            const accessToken = result.getAccessToken().getJwtToken();
            store.dispatch({
                type: userConstants.LOGIN_SUCCESS, 
                user: {
                    username: email,
                    jwtToken: accessToken,
                }
            });
            console.log(store.getState());
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