import React from 'react';
import {connect} from 'react-redux';
import {State} from '../../types/types';
import Employee from '../../types/Employee';
import EmployeeItem from './EmployeeItem';
import {changeEmployeeList} from '../../actions/actions';

function mapStateToProps(st: State) {
  const {employeeList} = st;
  return {employeeList};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleChangeStatus: (employeeList: Employee[], employeeId: string) => dispatch(changeEmployeeList(employeeList, employeeId)),
  }
}

const EmployeeList = ({employeeList, handleChangeStatus}: {employeeList: Employee[], handleChangeStatus: Function}) => {
  if (employeeList) {
    return  <ul>
      {employeeList.map((employee) => 
        <EmployeeItem 
          key={employee.id} 
          employee={employee}
          handleChangeStatus={() => handleChangeStatus(employeeList, employee.id)}
        />)
      }
    </ul>
  } return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);