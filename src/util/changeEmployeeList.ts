import Employee from '../types/Employee';

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
  // console.log(targetEmployee.isActive);
  return employeeListClone;
}

export const changeName = (
  employeeList: Employee[],
  employeeId: string,
  newFName: string,
  newLName: string,
  newMInitial: string | null = null
): Employee[] => {
  const employeeListClone = [...employeeList];
  const targetEmployee = getEmployeeById(employeeListClone, employeeId);
  targetEmployee.name = {fName: newFName, lName: newLName, mInitial: newMInitial};
  return employeeListClone;
}