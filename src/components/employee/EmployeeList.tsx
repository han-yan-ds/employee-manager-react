import React from 'react';
import {connect} from 'react-redux';
import {State} from '../../types/types';
import Employee from '../../types/Employee';
import EmployeeItem from './EmployeeItem';
import {changeEmployeeActive, showProfileModal} from '../../actions/actions';
import {Table} from 'react-bootstrap';

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
    return  <Table responsive="md">
      <thead><tr>
        <th>Employee Name</th>
        <th>Date of Employment</th>
        <th>Date of Birth</th>
        <th>Status</th>
      </tr></thead>
      <tbody>
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
      </tbody>
    </Table>
  } return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);