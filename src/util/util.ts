import {Date} from '../types/types';

const SERVERURL = 'http://localhost:9001';

export async function isValidCredentials(username: string, hash: string) {
  const response = await fetch(`${SERVERURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, hash})
  });
  return await response.json();
}

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