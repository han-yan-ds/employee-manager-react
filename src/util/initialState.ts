import Employee from '../types/Employee';

export const initialEmployeeList = [];

export const defaultIsLoggedIn = false;

export const BLANKEMPLOYEE: Employee = new Employee(-1, {
  fName: '',
  lName: '',
  mName: ''
}, {
    day: 1,
    month: 1,
    year: 1900
}, {
  day: 1,
  month: 1,
  year: 1900
})