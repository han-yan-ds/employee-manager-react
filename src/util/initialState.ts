import Employee from '../types/Employee';

const HAN = new Employee(
  {fName: 'Han', lName: 'Yan', mName: null},
  {day: 8, month: 3, year: 2019},
  {day: 11, month: 10, year: 2019}
)

const JAS = new Employee(
  {fName: 'Jasmine', lName: 'He', mName: null},
  {day: 5, month: 8, year: 2019},
  {day: 5, month: 12, year: 2019}
)

const JOVI = new Employee(
  {fName: 'Steve', lName: 'Jovanelly', mName: 'Jovi'},
  {day: 1, month: 1, year: 2019},
  {day: 1, month: 12, year: 2019}
)

export const defaultEmployeeList = [HAN, JAS, JOVI];
export let defaultIsLoggedIn = false;