import React from 'react';
import {connect} from 'react-redux';
import {State} from '../../types/types';
import Employee from '../../types/Employee';
import EmployeeItem from './EmployeeItem';
import {changeEmployeeActive, showProfileModal} from '../../actions/actions';

function mapStateToProps(st: State) {
  const {employeeList, showProfileId} = st;
  return {employeeList, showProfileId};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleChangeStatus: (employeeList: Employee[], employeeId: string) => dispatch(changeEmployeeActive(employeeList, employeeId)),
    handleShowProfileForm: (employeeId: string) => dispatch(showProfileModal(employeeId))
  }
}

const EmployeeList = (
  {employeeList, showProfileId, handleChangeStatus, handleShowProfileForm}: 
  {employeeList: Employee[], showProfileId: string | null; handleChangeStatus: Function, handleShowProfileForm: Function}
  ) => {

  if (employeeList) {
    return  <ul>
      {employeeList.map((employee) => 
        <EmployeeItem 
          key={employee.id} 
          employee={employee}
          handleChangeStatus={() => handleChangeStatus(employeeList, employee.id)}
          handleShowProfileForm={() => {
            if (!showProfileId) handleShowProfileForm(employee.id);
          }}
        />)
      }
    </ul>
  } return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);