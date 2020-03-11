import {combineReducers} from 'redux';
import {employeeListReducer, isLoggedInReducer} from './reducers';

export default combineReducers({
  employeeList: employeeListReducer,
  isLoggedIn: isLoggedInReducer
});