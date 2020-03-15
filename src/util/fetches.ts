import { convertDatabaseEmployeeToEmployeeObject } from "./util";
import { DatabaseEmployee } from "../types/types";

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
