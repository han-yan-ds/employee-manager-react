import {combineReducers} from 'redux';
import {
  employeeListReducer, 
  employeeFilterKeyStatusReducer,
  isLoggedInReducer,
  profileModalReducer,
  showLoginFailureReducer,
  profileFormCheckedReducer,
} from './reducers';

export default combineReducers({
  employeeList: employeeListReducer,
  employeeFilterKeyStatus: employeeFilterKeyStatusReducer,
  isLoggedIn: isLoggedInReducer,
  showProfileId: profileModalReducer,
  showLoginFailure: showLoginFailureReducer,
  profileFormChecked: profileFormCheckedReducer
});