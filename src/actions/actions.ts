import {Action, UpdateProfileParameters} from '../types/types';
import Employee from '../types/Employee';
import {changeProfile, sortEmployeeList} from '../util/changeEmployeeList';

export function updateEmployeeProfile(...args: UpdateProfileParameters) {
  return {
    type: 'UPDATE_EMPLOYEE_PROFILE',
    value: changeProfile(...args)
  }
}

export function changeEmployeeList(employeeList: Employee[]): Action {
  return {
    type: 'CHANGE_EMPLOYEE_LIST',
    value: sortEmployeeList(employeeList)
  }
}

export function changeEmployeeFilterKeyStatus(newKey: 'all' | 'active' | 'inactive'): Action {
  return {
    type: 'CHANGE_EMPLOYEE_FILTER_KEY_STATUS',
    value: newKey
  }
}

export function logOut(): Action {
  return {
    type: 'LOG_OUT',
    value: false
  }
}

export function logIn(): Action {
  return {
    type: 'LOG_IN',
    value: true
  }
}

export function showLoginFailure(showFail: boolean): Action {
  return {
    type: 'SHOW_LOGIN_FAILURE',
    value: showFail
  }
}

export function showProfileModal(employeeId: string): Action {
  return {
    type: 'SHOW_PROFILE_MODAL',
    value: employeeId
  }
}

export function hideProfileModal(): Action {
  return {
    type: 'HIDE_PROFILE_MODAL',
    value: null
  }
}