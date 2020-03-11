import {Action} from '../types/types';
import Employee from '../types/Employee';
import {defaultEmployeeList, defaultIsLoggedIn} from '../util/initialState';

export function employeeListReducer(defValue = defaultEmployeeList, action: Action): Employee[] {
  switch (action.type) {
    case 'DO_SOMETHING_EMPLOYEE':
      return action.value;
    default:
      return defValue;
  }
}

export function isLoggedInReducer(defValue = defaultIsLoggedIn, action: Action): boolean {
  switch (action.type) {
    case 'LOG IN OR OUT':
      return action.value;
    default:
      return defValue;
  }
}