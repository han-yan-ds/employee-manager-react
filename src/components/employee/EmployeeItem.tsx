import React from 'react';
import Employee from '../../types/Employee';

const EmployeeItem = (props: {
  employee: Employee, handleChangeStatus: Function, handleShowProfileForm: Function
}) => (
  <li>
    <span>{`${props.employee.nameString} ${props.employee.isActive}`}</span>

    <button onClick={() => props.handleChangeStatus()}>
      Update Active/Inactive
    </button>

    <button onClick={() => props.handleShowProfileForm()}>Profile</button>
  </li>
)

export default EmployeeItem;