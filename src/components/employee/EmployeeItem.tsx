import React from 'react';
import Employee from '../../types/Employee';

const EmployeeItem = ({employee}: {employee: Employee}) => (
  <li>
    {employee.nameString}
  </li>
)

export default EmployeeItem;