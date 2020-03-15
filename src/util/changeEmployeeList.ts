import Employee from '../types/Employee';
import {UpdateProfileParameters} from '../types/types';

export const getEmployeeById = (
  employeeList: Employee[], 
  employeeId: string
  ): Employee => employeeList.find((employee) => employee.id === employeeId)!;


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