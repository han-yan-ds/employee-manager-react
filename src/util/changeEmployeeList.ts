import Employee from '../types/Employee';

export const changeActiveStatus = (employeeList: Employee[], employeeId: string): Employee[] => {
  const employeeListClone = [...employeeList];
  const targetEmployee: Employee = employeeListClone.find((employee) => employee.id === employeeId)!;
  targetEmployee.toggleActive();
  console.log(targetEmployee.isActive);
  return employeeListClone;
}