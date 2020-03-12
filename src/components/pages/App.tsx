import React from 'react';
import {connect} from 'react-redux';
import EmployeeList from '../employee/EmployeeList';
import Header from './Header';
import EmployeeProfileForm from '../employee/EmployeeProfileForm';
import {State} from '../../types/types';
import Employee from '../../types/Employee';
import {getEmployeeById} from '../../util/changeEmployeeList';

function mapStateToProps(st: State) {
  const {employeeList, showProfileId} = st;
  return {employeeList, showProfileId};
}

const renderProfileForm = (employeeList: Employee[], showProfileId: string | null) => {
  if (showProfileId) {
    return <EmployeeProfileForm employee={getEmployeeById(employeeList, showProfileId)}/>
  } else {
    return;
  }
}

const App = (
  {employeeList, showProfileId}: {employeeList: Employee[], showProfileId: string | null}
) => (
  <React.Fragment>
    <Header/>
    <EmployeeList/>
    {renderProfileForm(employeeList, showProfileId)}
  </React.Fragment>
);

export default connect(mapStateToProps, null)(App);