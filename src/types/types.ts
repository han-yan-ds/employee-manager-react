import { EmployeeType } from './Employee';

export type Action = {
  type: string;
  value: unknown;
}

export type Date = {
  day: number;
  month: number;
  year: number;
}

export type Name = {
  fName: string;
  lName: string;
  mInitial: string | null;
}

export type State = {
  employeeList: EmployeeType[];
  isLoggedIn: boolean;
}