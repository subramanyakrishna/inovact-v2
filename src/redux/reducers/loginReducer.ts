import { userConstants } from 'redux/actionTypes/userConstants';
// const userTemp = localStorage.getItem("user");
// let user = userTemp && JSON.parse(userTemp!);

// const initialState = user ? {
//      loggedIn: true,
//       user 
//     }
//       : {};


// export function authentication(state = initialState, action :any) {
//   switch (action.type) {
//     case userConstants.LOGIN_REQUEST:
//       return {
//         loggingIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_SUCCESS:
//       return {
//         loggedIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_FAILURE:
//       return {};
//     case userConstants.LOGOUT:
//       return {};
//     default:
//       return state
//   }
// }
const initialState = {
  userAuthenticated: false,
  user: {
    profile_complete: false,
  },
  loading: false,
  message: "",
}

export function authentication(state = initialState, action :any) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        userAuthenticated: true,
        loading: false,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        userAuthenticated: false,
        loading: false,
        user: {},
        message: action.message,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        userAuthenticated: false,
        loading: false,
        user: {},
      };
    default:
      return state
  }
}