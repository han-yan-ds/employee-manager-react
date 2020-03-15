import React from 'react';
import {connect} from 'react-redux';
import {State, EmployeeFilterCb} from '../../types/types';
import Employee from '../../types/Employee';
import EmployeeItem from './EmployeeItem';
import {changeEmployeeActive, changeEmployeeList, changeEmployeeFilterKeyStatus, showProfileModal} from '../../actions/actions';
import {Table, Dropdown, DropdownButton} from 'react-bootstrap';
import {getAllEmployees} from '../../util/fetches';

function mapStateToProps(st: State) {
  const {employeeList, employeeFilterKeyStatus, showProfileId} = st;
  return {employeeList, employeeFilterKeyStatus, showProfileId};
}

function mapDispatchToProps(dispatch: Function) {
  getAllEmployees((resolvedList: Employee[]) => {
    dispatch(changeEmployeeList(resolvedList))
  });
  return {
    handleChangeStatus: (employeeList: Employee[], employeeId: string) => dispatch(changeEmployeeActive(employeeList, employeeId)),
    handleShowProfileForm: (employeeId: string) => dispatch(showProfileModal(employeeId)),
    handleChangeFilter: (newFilterKeyStatus: 'all' | 'active' | 'inactive') => dispatch(changeEmployeeFilterKeyStatus(newFilterKeyStatus))
  }
}

const EmployeeList = (
  {employeeList, employeeFilterKeyStatus, showProfileId, handleChangeStatus, handleChangeFilter, handleShowProfileForm}: 
  {employeeList: Employee[], 
    employeeFilterKeyStatus: 'all' | 'active' | 'inactive', 
    showProfileId: string | null; 
    handleChangeStatus: Function, 
    handleChangeFilter: Function,
    handleShowProfileForm: Function}
  ) => {

  if (employeeList) {
    return  <Table responsive="md">
      <thead><tr>
        <th>Employee Name</th>
        <th>Date of Employment</th>
        <th>Date of Birth</th>
        <th>Status
          <DropdownButton id="filter-status" title='' variant='White' className='inline'>
            <Dropdown.Item onClick={() => handleChangeFilter('all')}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeFilter('active')}>
              Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeFilter('inactive')}>
              Inactive
            </Dropdown.Item>
          </DropdownButton>
        </th>
      </tr></thead>
      <tbody>
        {employeeList.filter(EmployeeFilterCb[employeeFilterKeyStatus]).map((employee) => 
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