import Employee from '../types/Employee';

export const initialEmployeeList = [];

export let defaultIsLoggedIn = true;

export const BLANKEMPLOYEE: Employee = new Employee('', {
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