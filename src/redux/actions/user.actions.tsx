import { userConstants } from 'redux/actionTypes/userConstants';
import { userService } from 'redux/services/user.services';
import { history } from 'redux/helpers/history';

export const userActions = {
    login,
    logout,
    register,
};


function register( user :any) {

    return (dispatch :any) => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/userinfo');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user : any) { 
        return { type: userConstants.REGISTER_REQUEST, user } 
    }

    function success(user :any) {
         return { type: userConstants.REGISTER_SUCCESS, user }
        }
    function failure(error :any) {
         return { type: userConstants.REGISTER_FAILURE, error }
         }
}

function login(email :any, password:any) {
    return (dispatch :any) => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/feed');
                },
                error => {
                    dispatch(failure(error));
                  
                }
            );
    };

    function request(user :any) {
         return { type: userConstants.LOGIN_REQUEST, user }
         }
    function success(user :any) { 
        return { type: userConstants.LOGIN_SUCCESS, user }
         }
    function failure(error :any) {
         return { type: userConstants.LOGIN_FAILURE, error }
         }
}

/*export const setUserLoading = () => {
    return {
      type: userConstants.LOADING_USER,
    };
  };
  
{export const setUserVerified = () => {
    return {
      type: userConstants.IS_VERIFIED,
    };
  };
?}*/

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}