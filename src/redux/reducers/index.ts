import { combineReducers } from 'redux';

import { authentication } from 'redux/reducers/loginReducer';
import { registration } from 'redux/reducers/registerReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
});

export default rootReducer;