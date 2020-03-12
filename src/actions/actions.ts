import {Action} from '../types/types';
import Employee from '../types/Employee';
import {changeActiveStatus} from '../util/changeEmployeeList';

export function changeEmployeeList(employeeList: Employee[], employeeId: string): Action {
  return {
    type: 'CHANGE_EMPLOYEE_ACTIVE',
    value: changeActiveStatus(employeeList, employeeId),
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