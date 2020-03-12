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

  return <div className='modal'>
    <form>
      <label>First Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        name='firstName' 
        required={true}
        value={name.fName}
      />
      <label>Middle Initial</label>
      <input 
        type='text' 
        name='middleInitial' 
        value={(name.mInitial) ? name.mInitial : ''}
        size={1}
      />
      <label>Last Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        name='lastName'
        required={true}
        value={name.lName}
      />
      <label>Date Of Birth<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        name='dateOfBirth'
        required={true}
        value={convertDateToHtmlInput(dateOfBirth)}
      />
      <label>Date Of Employment<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        name='dateOfEmployment'
        required={true} 
        value={convertDateToHtmlInput(dateOfEmployment)}
      />
    </form>
    {/* cancel button */}
    <button onClick={() => cancelModal()}>X</button>
    {/* save button */}
    <button>Save Changes</button>
  </div>

}

export default connect(null, mapDispatchToProps)(EmployeeProfileForm);