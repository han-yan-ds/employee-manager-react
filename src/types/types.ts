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
  employeeFilterKeyStatus: 'all' | 'active' | 'inactive';
  isLoggedIn: boolean;
  showProfileId: string | null;
  showLoginFailure: boolean;
}

export type DatabaseEmployee = {
  uuid: number;
  firstname: string;
  middlename: string | null;
  lastname: string;
  dob: string;
  doe: string;
  active: boolean
}

export type DatabaseEmployeePatch = {
  uuid: number;
  firstname?: string;
  middlename?: string | null;
  lastname?: string;
  dob?: string;
  doe?: string;
  active?: boolean
}

export type DatabaseEmployeePost = {
  firstname: string;
  middlename: string | null;
  lastname: string;
  dob: string;
  doe: string;
  active?: boolean
}

export type ClickHandler = (e: React.MouseEvent) => void;


export const EmployeeFilterCb = {
  all: (em: Employee) => true,
  active: (em: Employee) => em.isActive,
  inactive: (em: Employee) => !em.isActive
}