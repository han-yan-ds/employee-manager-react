import {Date, DatabaseEmployee} from '../types/types';
import Employee from '../types/Employee';

export const getEmployeeById = (
  employeeList: Employee[], 
  employeeId: number
  ): Employee => employeeList.find((employee) => employee.id === employeeId)!;


export const sortEmployeeList = (employeeList: Employee[]) => (
  employeeList.sort((a, b) => b.id - a.id)
)

export const convertDateToHtmlInput = (date: Date): string => {
  /**
   * This is converting a Date to an HTML date string
   * Exact opposite of convertDateStrToDate()
   */
  const {year, month, day} = date;
  return `${zeroPad(year, 4)}-${zeroPad(month, 2)}-${zeroPad(day, 2)}`;
}

const zeroPad = (num: number, places: number): string => {
  const zero = places - num.toString().length + 1;
  return `${Array(+(zero > 0 && zero)).join('0')}${num}`;
}

export const getInputValueById = (id: string): any => {
  const value = (document.getElementById(id)! as HTMLInputElement).value;
  return (value !== '') ? value : null;
}

export const convertDateStrToDate = (dateString: string): Date => {
  /**
   * This is converting an HTML date string to a Date
   * Exact opposite of convertDateToHtmlInput()
   */
  const [year, month, day] = dateString.split('-').map((numStr) => Number(numStr));
  return {day, month, year};
}

export const convertDatabaseEmployeeToEmployeeObject = (record: DatabaseEmployee): Employee => {
  const {uuid, firstname, middlename, lastname, dob, doe, active} = record;
  return new Employee(
    uuid,
    {fName: firstname, lName: lastname, mName: middlename},
    convertDateStrToDate(dob.split('T')[0]),
    convertDateStrToDate(doe.split('T')[0]),
    active
  )
}