import React from 'react';
import Employee from '../../types/Employee';

const EmployeeProfileForm = ({employee}: {employee: Employee}) => {

  const {name, dateOfBirth, dateOfEmployment} = employee;

  return <div className='modal'>
    <form>
      <input type='text' name='firstName'  placeholder='First Name' value={name.fName}/>
      <input type='text' name='middleInitial' value={(name.mInitial) ? name.mInitial : ''}/>
      <input type='text' name='lastName' placeholder='Last Name' value={name.lName}/>
      <input type='date' name='dateOfBirth' value={`${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`}/>
      <input type='date' name='dateOfEmployment' value={`${dateOfEmployment.year}-${dateOfEmployment.month}-${dateOfEmployment.day}`}/>
    </form>
  </div>

}

export default EmployeeProfileForm;