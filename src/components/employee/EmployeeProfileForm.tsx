import React from 'react';
import Employee from '../../types/Employee';
import {convertDateToHtmlInput} from '../../util/util';

const EmployeeProfileForm = ({employee}: {employee: Employee}) => {

  const {name, dateOfBirth, dateOfEmployment} = employee;

  return <div className='modal'>
    <form>
      <input type='text' name='firstName'  placeholder='First Name' value={name.fName}/>
      <input type='text' name='middleInitial' value={(name.mInitial) ? name.mInitial : ''}/>
      <input type='text' name='lastName' placeholder='Last Name' value={name.lName}/>
      <input type='date' name='dateOfBirth' value={convertDateToHtmlInput(dateOfBirth)}/>
      <input type='date' name='dateOfEmployment' value={convertDateToHtmlInput(dateOfEmployment)}/>
    </form>
  </div>

}

export default EmployeeProfileForm;