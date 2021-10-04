import { combineReducers } from 'redux';

import { authentication } from 'redux/reducers/loginReducer';
import { registration } from 'redux/reducers/registerReducer';
import { updateUserCreds } from './userCredsReducer';
import { updateUserInfo } from './userInformation';

const rootReducer = combineReducers({
  authentication: authentication,
  registration: registration,
  userInfo: updateUserInfo,
  userCreds: updateUserCreds,
});

export default rootReducer;