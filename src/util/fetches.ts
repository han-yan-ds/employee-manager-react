import { convertDatabaseEmployeeToEmployeeObject } from "./util";
import { DatabaseEmployee, DatabaseEmployeePatch } from "../types/types";
import Employee from '../types/Employee';
import { getEmployeeById } from "./changeEmployeeList";

const SERVERURL = 'http://localhost:9001';

export async function isValidCredentials(username: string, hash: string) {
  const response = await fetch(`${SERVERURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, hash})
  });
  return await response.json();
}

export const getAllEmployees = (cb: Function) => new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(`${SERVERURL}/employees`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const allEmployees: DatabaseEmployee[] = await response.json();
    resolve(cb(allEmployees.map(convertDatabaseEmployeeToEmployeeObject)));
  } catch (err) {
    reject('Error retrieving all employees');
  }
})

export const patchEmployee = (body: DatabaseEmployeePatch) => new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(`${SERVERURL}/employees`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const patchedEmployee = await response.json();
    resolve(patchedEmployee);
  } catch (err) {
    reject(`Error patching employee ID=${body.uuid}`);
  }
})

export const toggleActiveEmployee = (employeeList: Employee[], employeeId: string) => new Promise(async (resolve, reject) => {
  try {
    let newStatus = !getEmployeeById(employeeList, employeeId).isActive;
    let changedStatus = await patchEmployee({uuid: employeeId, active: newStatus}); //ISSUE
    resolve(changedStatus);
  } catch (err) {
    reject('Toggling Active Employee failed');
  }
})