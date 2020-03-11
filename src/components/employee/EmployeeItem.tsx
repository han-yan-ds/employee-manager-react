import React from 'react';
import Employee from '../../types/Employee';

const EmployeeItem = ({employee}: {employee: Employee}) => (
  <li>
    <span>{`${employee.nameString} ${employee.isActive}`}</span>
  </li>
)

export default EmployeeItem;