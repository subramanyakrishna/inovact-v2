import { combineReducers } from 'redux';

import { authentication } from 'redux/reducers/loginReducer';
import { registration } from 'redux/reducers/registerReducer';
import { updateUserCreds } from './userCredsReducer';
import { updateUserInfo } from './userInformationReducer';
import { updateUserData } from "./userDataReducer";

const rootReducer = combineReducers({
  authentication: authentication,
  registration: registration,
  userInfo: updateUserInfo,
  userCreds: updateUserCreds,
  userData: updateUserData,
});

export default rootReducer;