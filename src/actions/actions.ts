import {Action} from '../types/types';
import Employee from '../types/Employee';

export function changeEmployeeList(employeeList: Employee[]): Action {
  return {
    type: 'CHANGE_EMPLOYEE_LIST',
    value: employeeList
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