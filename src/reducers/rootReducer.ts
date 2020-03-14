import {combineReducers} from 'redux';
import {
  employeeListReducer, 
  isLoggedInReducer,
  profileModalReducer,
  showLoginFailureReducer
} from './reducers';

export default combineReducers({
  employeeList: employeeListReducer,
  isLoggedIn: isLoggedInReducer,
  showProfileId: profileModalReducer,
  showLoginFailure: showLoginFailureReducer
});