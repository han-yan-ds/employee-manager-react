import {Date, DatabaseEmployee} from '../types/types';
import Employee from '../types/Employee';

export function convertDateToHtmlInput(date: Date): string {
  /**
   * This is converting a Date to an HTML date string
   * Exact opposite of convertDateStrToDate()
   */
  const {year, month, day} = date;
  return `${zeroPad(year, 4)}-${zeroPad(month, 2)}-${zeroPad(day, 2)}`;
}

function zeroPad(num: number, places: number) {
  const zero = places - num.toString().length + 1;
  return `${Array(+(zero > 0 && zero)).join('0')}${num}`;
}

export function getInputValueById(id: string): any {
  const value = (document.getElementById(id)! as HTMLInputElement).value;
  return (value !== '') ? value : null;
}

export function convertDateStrToDate(dateString: string): Date {
  /**
   * This is converting an HTML date string to a Date
   * Exact opposite of convertDateToHtmlInput()
   */
  const [year, month, day] = dateString.split('-').map((numStr) => Number(numStr));
  return {day, month, year};
}

export function convertDatabaseEmployeeToEmployeeObject(record: DatabaseEmployee): Employee {
  const {uuid, firstname, middlename, lastname, dob, doe, active} = record;
  return new Employee(
    uuid,
    {fName: firstname, lName: lastname, mName: middlename},
    convertDateStrToDate(dob.split('T')[0]),
    convertDateStrToDate(doe.split('T')[0]),
    active
  )
}