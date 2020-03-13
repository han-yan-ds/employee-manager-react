import {Action, Name, Date} from '../types/types';
import Employee from '../types/Employee';
import {changeActiveStatus, changeProfile} from '../util/changeEmployeeList';

export function changeEmployeeList(employeeList: Employee[], employeeId: string): Action {
  return {
    type: 'CHANGE_EMPLOYEE_ACTIVE',
    value: changeActiveStatus(employeeList, employeeId),
  }
}

export function updateEmployeeProfile(
  employeeList: Employee[], 
  employeeId: string, 
  newName: Name, 
  newDob: Date, 
  newDoe: Date
) {
  return {
    type: 'UPDATE_EMPLOYEE_PROFILE',
    value: changeProfile(employeeList, employeeId, newName, newDob, newDoe)
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