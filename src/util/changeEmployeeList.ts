import Employee from '../types/Employee';
import {UpdateProfileParameters} from '../types/types';

export const getEmployeeById = (
  employeeList: Employee[], 
  employeeId: string
  ): Employee => employeeList.find((employee) => employee.id === employeeId)!;


export const changeActiveStatus = (
  employeeList: Employee[], 
  employeeId: string, 
  newStatus: boolean | undefined = undefined
  ): Employee[] => {

  const employeeListClone = [...employeeList];
  const targetEmployee = getEmployeeById(employeeListClone, employeeId);
  if (newStatus === undefined) {
    targetEmployee.toggleActive();
  } else {
    targetEmployee.isActive = newStatus;
  }
  return employeeListClone;
}

export const changeProfile = (
  ...[employeeList, employeeId, newName, newDateOfBirth, newDateOfEmployment]: UpdateProfileParameters
): Employee[] => {
  const employeeListClone = [...employeeList];
  const targetEmployee = getEmployeeById(employeeListClone, employeeId);
  targetEmployee.name = newName;
  targetEmployee.dateOfBirth = newDateOfBirth;
  targetEmployee.dateOfEmployment = newDateOfEmployment
  return employeeListClone;
}