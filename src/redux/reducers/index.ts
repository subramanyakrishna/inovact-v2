import { combineReducers } from 'redux';

import { authentication } from 'redux/reducers/loginReducer';
import { registration } from 'redux/reducers/registerReducer';
import { updateUserCreds } from './userCredsReducer';
import { updateUserInfo } from './userInformationReducer';
import { updateUserData } from "./userDataReducer";
import { updateProjectInfoReducer } from './addProjectReducer';
import { updateIdeaInfoReducer } from './addIdeaReducer';
import { updateThoughtInfoReducer } from './addThoughtReducer';

const rootReducer = combineReducers({
  authentication: authentication,
  registration: registration,
  userInfo: updateUserInfo,
  userCreds: updateUserCreds,
  addProject: updateProjectInfoReducer,
  addIdea: updateIdeaInfoReducer,
  addThought: updateThoughtInfoReducer,
});

export default rootReducer;