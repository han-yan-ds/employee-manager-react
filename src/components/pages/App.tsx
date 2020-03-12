import React from 'react';
// import {connect} from 'react-redux';
import EmployeeList from '../employee/EmployeeList';
import Header from './Header';
// import EmployeeProfileForm from '../employee/EmployeeProfileForm';
// import {State} from '../../types/types';
import Employee from '../../types/Employee';
// import {getEmployeeById} from '../../util/changeEmployeeList';

// function mapStateToProps(st: State) {
//   const {employeeList, showProfileId} = st;
//   return {employeeList, showProfileId};
//   // return {showProfileId}
// }

// const renderProfileForm = (st: State) => {
//   if (st.showProfileId) {
//     return <EmployeeProfileForm employee={getEmployeeById(st.employeeList, st.showProfileId)}/>
//   } else {
//     return;
//   }
// }

const App = (
  {employeeList, showProfileId}: {employeeList: Employee[], showProfileId: string | null}
) => (
  <React.Fragment>
    <Header/>
    <div className="App">
      <EmployeeList/>
    </div>
  </React.Fragment>
);

export default App;