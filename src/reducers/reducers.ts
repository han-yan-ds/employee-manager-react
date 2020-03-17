import {Action} from '../types/types';
import Employee from '../types/Employee';
import {initialEmployeeList, defaultIsLoggedIn} from '../util/initialState';

export const employeeListReducer = (defValue = initialEmployeeList, action: Action): Employee[] => {
  switch (action.type) {
    case 'CHANGE_EMPLOYEE_LIST':
      return action.value;
    default:
      return defValue;
  }
}

export const isLoggedInReducer = (defValue = defaultIsLoggedIn, action: Action): boolean => {
  switch (action.type) {
    case 'LOG_IN':
      return action.value;
    case 'LOG_OUT':
      return action.value;
    default:
      return defValue;
  }
}

export const employeeFilterKeyStatusReducer = (_defValue = 'all', action: Action): 'all' | 'active' | 'inactive' => {
  switch (action.type) {
    case 'CHANGE_EMPLOYEE_FILTER_KEY_STATUS':
      return action.value;
    default:
      return 'all';
  }
}

export const showLoginFailureReducer = (defValue = false, action: Action): boolean => {
  switch (action.type) {
    case 'SHOW_LOGIN_FAILURE':
      return action.value;
    default:
      return defValue;
  }
}

export const profileModalReducer = (defValue = null, action: Action): string | null => {
  switch (action.type) {
    case 'SHOW_PROFILE_MODAL':
      return action.value;
    case 'HIDE_PROFILE_MODAL':
      return null;
    default:
      return defValue;
  }
}

export const profileFormCheckedReducer = (defValue = false, action: Action): boolean => {
  switch (action.type) {
    case 'CHECK_PROFILE_FORM':
      return action.value;
    default:
      return defValue;
  }
}