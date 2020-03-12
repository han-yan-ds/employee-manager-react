import React from 'react';
import Employee from '../../types/Employee';

const EmployeeItem = (props: {
  employee: Employee, handleChangeStatus: Function, handleShowProfileForm: Function
}) => (
  <li>
    <span>{`${props.employee.nameString} ${props.employee.isActive}`}</span>
    {/* active/inactive button */}
    <button onClick={() => props.handleChangeStatus()}>
      Update Active/Inactive
    </button>
    {/* edit profile button */}
    <button onClick={() => props.handleShowProfileForm()}>Profile</button>
  </li>
)

export default EmployeeItem;