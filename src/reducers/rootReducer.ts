import {combineReducers} from 'redux';
import {
  employeeListReducer, 
  isLoggedInReducer,
  profileModalReducer
} from './reducers';

export default combineReducers({
  employeeList: employeeListReducer,
  isLoggedIn: isLoggedInReducer,
  showProfileId: profileModalReducer,
});