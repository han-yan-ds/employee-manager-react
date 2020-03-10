import {Name, Date} from './types';
import {v4 as uuidv4} from 'uuid';

export class Employee {

  /**
   * SHORT GUIDE:
   * Creating an Employee:  new Employee(name: Name, dob: Date, doe: Date, {isActive: bool})
   * 
   * Getting Name (as string):  Employee.nameString
   * Getting DOB (as string):  Employee.dateOfBirthString
   * Getting DOE (as string):  Employee.dateOfEmploymentString
   * Getting AND Setting Status:  Employee.isActive
   * Getting ID:  Employee.id
   */

  private employeeId: string;

  constructor(
    private employeeName: Name, 
    private employeeDob: Date, 
    private employeeDoe: Date, 
    private employeeIsActive: boolean = true) {
      this.employeeId = uuidv4();
  }

  get id() {
    return this.employeeId;
  }

  // get name() {
  //   return this.employeeName;
  // }

  get nameString() {
    if (this.employeeName.mInitial) {
      return `${this.employeeName.fName} ${this.employeeName.mInitial} ${this.employeeName.lName}`;
    } else {
      return `${this.employeeName.fName} ${this.employeeName.lName}`;
    }
  }

  // get dateOfBirth() {
  //   return this.employeeDob;
  // }

  get dateOfBirthString() {
    return `${this.employeeDob.month}/${this.employeeDob.day}/${this.employeeDob.year}`
  }

  // get dateOfEmployment() {
  //   return this.employeeDoe;
  // }

  get dateOfEmploymentString() {
    return `${this.employeeDoe.month}/${this.employeeDoe.day}/${this.employeeDoe.year}`
  }

  get isActive() {
    return this.employeeIsActive;
  }

  set isActive(active: boolean) {
    this.employeeIsActive = active;
  }
}