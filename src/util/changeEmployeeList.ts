import Employee from '../types/Employee';

export const getEmployeeById = (
  employeeList: Employee[], 
  employeeId: string
  ): Employee => employeeList.find((employee) => employee.id === employeeId)!;


export const sortEmployeeList = (employeeList: Employee[]) => (
  employeeList.sort((a, b) => a.id.localeCompare(b.id))
)