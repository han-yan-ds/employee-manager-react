import React from 'react';
import {connect} from 'react-redux';
import Employee from '../../types/Employee';
import {convertDateToHtmlInput} from '../../util/util';
import {hideProfileModal} from '../../actions/actions';
import '../../styles/general.scss';

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

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target); // CURRENT PRINTS THE ENTIRE FORM OUT
  }

  return <div className='modal'>
    <form onSubmit={submitHandler}>
      <label>First Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        name='firstName' 
        required={true}
        defaultValue={name.fName}
      />
      <label>Middle Initial</label>
      <input 
        type='text' 
        name='middleInitial' 
        defaultValue={(name.mInitial) ? name.mInitial : ''}
        size={1}
      />
      <label>Last Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        name='lastName'
        required={true}
        defaultValue={name.lName}
      />
      <label>Date Of Birth<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        name='dateOfBirth'
        required={true}
        defaultValue={convertDateToHtmlInput(dateOfBirth)}
      />
      <label>Date Of Employment<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        name='dateOfEmployment'
        required={true} 
        defaultValue={convertDateToHtmlInput(dateOfEmployment)}
      />
      {/* cancel button */}
      <button onClick={() => cancelModal()}>X</button>
      {/* save button */}
      <input type='submit' value='Save Changes'/>
    </form>
  </div>

}

export default connect(null, mapDispatchToProps)(EmployeeProfileForm);