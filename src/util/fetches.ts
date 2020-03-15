import { convertDatabaseEmployeeToEmployeeObject, getEmployeeById } from "./util";
import { DatabaseEmployee, DatabaseEmployeePatch, DatabaseEmployeePost } from "../types/types";
import {changeEmployeeList} from '../actions/actions';
import Employee from '../types/Employee';

const SERVERURL = 'http://localhost:9001';

export const isValidCredentials = async (username: string, hash: string) => {
  const response = await fetch(`${SERVERURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, hash})
  });
  return await response.json();
}

const getAllEmployees = (cb: Function) => new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(`${SERVERURL}/employees`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const allEmployees: DatabaseEmployee[] = await response.json();
    resolve(cb(allEmployees.map(convertDatabaseEmployeeToEmployeeObject)));
  } catch (err) {
    console.log(err);
    reject('Error retrieving all employees');
  }
})

export const updateEmployeeList = (dispatch: Function): void => {
  /**
   * This function returns a function that, when run, asks dispatch to update employeeList
   * To update employeeList on the DOM, call updateEmployeeList(dispatch) inside mapDispatchToProps
   */
  getAllEmployees((resolvedList: Employee[]) => {
    dispatch(changeEmployeeList(resolvedList))
  })
}


const patchEmployee = (body: DatabaseEmployeePatch) => new Promise(async (resolve, reject) => {
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

export const toggleActiveEmployee = (employeeList: Employee[], employeeId: number) => new Promise(async (resolve, reject) => {
  try {
    let newStatus = !getEmployeeById(employeeList, employeeId).isActive;
    let changedStatus = await patchEmployee({uuid: employeeId, active: newStatus});
    resolve(changedStatus);
  } catch (err) {
    reject('Toggling Active Employee failed');
  }
})

export const updateEmployeeInfo = (newProfile: DatabaseEmployeePatch) => new Promise(async (resolve, reject) => {
  try {
    let updatedEmployee = await patchEmployee(newProfile);
    resolve(updatedEmployee);
  } catch (err) {
    reject('Updating Employee failed');
  }
})

export const addEmployee = (body: DatabaseEmployeePost) => new Promise(async (resolve, reject) => {
  try {
    const wholeBody: DatabaseEmployeePost = {active: true, ...body};
    const response = await fetch(`${SERVERURL}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(wholeBody)
    });
    const newEmployee = await response.json();
    resolve(newEmployee);
  } catch (err) {
    reject('Adding New Employee failed');
  }
})