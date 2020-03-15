import {Name, Date} from './types';

export default class Employee {

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

  constructor(
    private uuid: string,
    private employeeName: Name, 
    private employeeDob: Date, 
    private employeeDoe: Date, 
    private employeeIsActive: boolean = true) {
  }

  get id() {
    return this.uuid;
  }

  // NAME
  get name() {
    return this.employeeName;
  }
  get nameString() {
    if (this.employeeName.mName) {
      return `${this.employeeName.fName} ${this.employeeName.mName[0]}. ${this.employeeName.lName}`;
    } else {
      return `${this.employeeName.fName} ${this.employeeName.lName}`;
    }
  }
  set name(newName: Name) {
    this.employeeName = newName;
  }

  // DATE OF BIRTH
  get dateOfBirth() {
    return this.employeeDob;
  }
  set dateOfBirth(newDateOfBirth: Date) {
    this.employeeDob = newDateOfBirth;
  }
  get dateOfBirthString() {
    return `${this.employeeDob.month}/${this.employeeDob.day}/${this.employeeDob.year}`
  }

  // DATE OF EMPLOYMENT
  get dateOfEmployment() {
    return this.employeeDoe;
  }
  set dateOfEmployment(newDateOfEmployment: Date) {
    this.employeeDoe = newDateOfEmployment;
  }
  get dateOfEmploymentString() {
    return `${this.employeeDoe.month}/${this.employeeDoe.day}/${this.employeeDoe.year}`
  }

  // ACTIVE/INACTIVE
  get isActive() {
    return this.employeeIsActive;
  }
  set isActive(active: boolean) {
    this.employeeIsActive = active;
  }
  toggleActive() {
    if (this.employeeIsActive) {
      this.employeeIsActive = false;
    } else {
      this.employeeIsActive = true;
    }
  }
}