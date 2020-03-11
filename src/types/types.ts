import Employee from './Employee';

export type Action = {
  type: string;
  value: any;
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
  employeeList: Employee[];
  isLoggedIn: boolean;
}

export type ClickHandler = (e: React.MouseEvent) => void;