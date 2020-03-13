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
  mName: string | null;
}

export type State = {
  employeeList: Employee[];
  isLoggedIn: boolean;
  showProfileId: string | null;
}

export type ClickHandler = (e: React.MouseEvent) => void;

export type UpdateProfileParameters = [
  Employee[], // employeeList
  string, // employeeId... never null
  Name, // employeeName
  Date, // dateOfBirth
  Date // dateOfEmployment
]