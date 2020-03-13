import React from 'react';
import Employee from '../../types/Employee';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const EmployeeItem = (props: {
  employee: Employee, handleChangeStatus: Function, handleShowProfileForm: Function
  }) => (
  <tr>
    <td>{props.employee.nameString}</td>
    <td>{props.employee.dateOfEmploymentString}</td>
    <td>{props.employee.dateOfBirthString}</td>
    <td>{(props.employee.isActive) ? "Active" : "Inactive"}
      <DropdownButton id={`options-${props.employee.id}`} title='' variant='Secondary' className="inline">
        <Dropdown.Item onClick={() => props.handleChangeStatus()}>
          {`Set ${(props.employee.isActive) ? "Inactive" : "Active"}`}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.handleShowProfileForm()}>
          Edit Profile
        </Dropdown.Item>
      </DropdownButton>
    </td>
  </tr>
)

export default EmployeeItem;