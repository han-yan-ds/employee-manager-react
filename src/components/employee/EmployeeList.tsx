import React from 'react';
import {connect} from 'react-redux';
import {State} from '../../types/types';
import EmployeeItem from './EmployeeItem';

function mapStateToProps(st: State) {
  const {employeeList} = st;
  return {employeeList};
}

// function mapDispatchToProps(dispatch) {

// }

const EmployeeList = ({employeeList}: State) => {
  if (employeeList) {
    return  <ul>
      {employeeList.map((employee) => 
        <EmployeeItem 
          key={employee.id} 
          employee={employee}
        />)
      }
    </ul>
  } return null;
}

export default connect(mapStateToProps, null)(EmployeeList);