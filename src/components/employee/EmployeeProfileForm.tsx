import React from 'react';
import {connect} from 'react-redux';
import Employee from '../../types/Employee';
import {convertDateToHtmlInput} from '../../util/util';
import {hideProfileModal} from '../../actions/actions';

function mapDispatchToProps(dispatch: Function) {
  return {
    cancelModal: () => dispatch(hideProfileModal())
  }
}

const EmployeeProfileForm = (
  {employee, cancelModal}: 
  {employee: Employee, cancelModal: Function}
) => {
  const {name, dateOfBirth, dateOfEmployment} = employee;

  return <div className='modal'>
    <form>
      <input type='text' name='firstName'  placeholder='First Name' value={name.fName}/>
      <input type='text' name='middleInitial' value={(name.mInitial) ? name.mInitial : ''}/>
      <input type='text' name='lastName' placeholder='Last Name' value={name.lName}/>
      <input type='date' name='dateOfBirth' value={convertDateToHtmlInput(dateOfBirth)}/>
      <input type='date' name='dateOfEmployment' value={convertDateToHtmlInput(dateOfEmployment)}/>
    </form>
    <button onClick={() => cancelModal()}>X</button>
  </div>

}

export default connect(null, mapDispatchToProps)(EmployeeProfileForm);