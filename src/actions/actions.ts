import {Action} from '../types/types';
import Employee from '../types/Employee';
import {sortEmployeeList} from '../util/util';


export const changeEmployeeList = (employeeList: Employee[]): Action => (
  {
    type: 'CHANGE_EMPLOYEE_LIST',
    value: sortEmployeeList(employeeList)
  }
)

export const changeEmployeeFilterKeyStatus = (newKey: 'all' | 'active' | 'inactive'): Action => (
  {
    type: 'CHANGE_EMPLOYEE_FILTER_KEY_STATUS',
    value: newKey
  }
)

export const logOut = (): Action => (
  {
    type: 'LOG_OUT',
    value: false
  }
)

export const logIn = (): Action => (
  {
    type: 'LOG_IN',
    value: true
  }
)

export const showLoginFailure = (showFail: boolean): Action => (
  {
    type: 'SHOW_LOGIN_FAILURE',
    value: showFail
  }
)

export const showProfileModal = (employeeId: number | 'addEmployee'): Action => (
  {
    type: 'SHOW_PROFILE_MODAL',
    value: employeeId
  }
)

export const hideProfileModal = (): Action => (
  {
    type: 'HIDE_PROFILE_MODAL',
    value: null
  }
)

export const profileFormCheck = (isChecked: boolean): Action => (
  {
    type: 'CHECK_PROFILE_FORM',
    value: isChecked
  }
)