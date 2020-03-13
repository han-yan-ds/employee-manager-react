import {Date} from '../types/types';

export function convertDateToHtmlInput(date: Date): string {
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