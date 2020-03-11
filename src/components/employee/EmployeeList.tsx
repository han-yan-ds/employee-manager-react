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
    handleChangeStatus: (employeeList: Employee[], employeeId: string) => dispatch(changeEmployeeList(changeStatus(employeeList, employeeId))),
  }
}

const changeStatus = (employeeList: Employee[], employeeId: string): Employee[] => {
  const employeeListClone = [...employeeList];
  const targetEmployee: Employee = employeeListClone.find((employee) => employee.id === employeeId)!;
  targetEmployee.toggleActive();
  console.log(targetEmployee.isActive);
  return employeeListClone;
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