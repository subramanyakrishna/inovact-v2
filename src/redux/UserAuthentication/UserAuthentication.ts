import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import UserPool from './UserPool'
import { store } from 'redux/helpers/store'
import { userConstants } from 'redux/actionTypes/userConstants'
import axios from 'axios'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'

const userAuthentication = async (
    email: any,
    password: any,
    setIsLoading: Function,
    setErrors: Function
) => {
    const authenticationData = {
        Username: email,
        Password: password,
    }
    const authenticationDetails = new AuthenticationDetails(authenticationData)

    const userData = {
        Username: email,
        Pool: UserPool,
    }
    const cognitoUser = new CognitoUser(userData)
    store.dispatch({ type: userConstants.LOGIN_REQUEST })
    ;(async () => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: async function (result) {
                // const accessToken = result.getAccessToken().getJwtToken();
                //
                // store.dispatch({
                //     type: userConstants.LOGIN_SUCCESS,
                //     user: {
                //         profile_complete: false,
                //     }
                // });
                // localStorage.setItem("user", accessToken);
                //
                localStorage.setItem('user', result.getIdToken().getJwtToken())

                const currentUser: any = UserPool

                axios
                    .get(
                        'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user',
                        {
                            headers: {
                                Authorization: currentUser.storage.user,
                            },
                        }
                    )
                    .then((resp: any) => {
                        store.dispatch({
                            type: userConstants.LOGIN_SUCCESS,
                            user: {
                                profile_complete:
                                    resp.data.data.user[0].profile_complete,
                            },
                        })
                        store.dispatch({
                            type: userInfoConstants.UPDATE_WHOLE_PROFILE,
                            data: resp.data.user[0],
                        })
                    })
                    .catch((err) => {})
            },
            onFailure: async function (err) {
                setIsLoading(false)
                setErrors(err.message)
                store.dispatch({
                    type: userConstants.LOGIN_FAILURE,
                    message: err.message,
                })
                // localStorage.removeItem("user");
                localStorage.clear()
                return new Error('authentication failure')
            },
        })
    })().then(() => {})
}

export default userAuthentication
