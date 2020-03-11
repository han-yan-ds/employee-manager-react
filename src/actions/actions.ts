import {Action} from '../types/types';

export function activateEmployee(employeeId: string): Action {
  return {
    type: 'ACTIVATE_EMPLOYEE',
    value: employeeId
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