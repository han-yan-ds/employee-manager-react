import React from 'react';
import Employee from '../../types/Employee';
import {ListGroup} from 'react-bootstrap';

const EmployeeItem = (props: {
  employee: Employee, handleChangeStatus: Function, handleShowProfileForm: Function
  }) => (
  <tr>
    <td>{props.employee.nameString}</td>
    <td>{props.employee.dateOfEmploymentString}</td>
    <td>{props.employee.dateOfBirthString}</td>
    <td>{(props.employee.isActive) ? "Active" : "Inactive"}</td>
    {/* active/inactive button */}
    <button onClick={() => props.handleChangeStatus()}>
      Update Active/Inactive
    </button>
    {/* edit profile button */}
    <button onClick={() => props.handleShowProfileForm()}>Profile</button>
  </tr>
)

export default EmployeeItem;