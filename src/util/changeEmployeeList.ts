import Employee from '../types/Employee';

export const changeActiveStatus = (
    employeeList: Employee[], 
    employeeId: string, 
    newStatus: boolean | undefined = undefined
  ): Employee[] => {
  const employeeListClone = [...employeeList];
  const targetEmployee: Employee = employeeListClone.find((employee) => employee.id === employeeId)!;
  if (newStatus === undefined) {
    targetEmployee.toggleActive();
  } else {
    targetEmployee.isActive = newStatus;
  }
  // console.log(targetEmployee.isActive);
  return employeeListClone;
}