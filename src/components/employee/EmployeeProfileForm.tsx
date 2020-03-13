import React from 'react';
import {connect} from 'react-redux';
import Employee from '../../types/Employee';
import {Date, Name, UpdateProfileParameters} from '../../types/types';
import {convertDateToHtmlInput, convertDateStrToDate, getInputValueById} from '../../util/util';
import {updateEmployeeProfile, hideProfileModal} from '../../actions/actions';
import {Modal, Button} from 'react-bootstrap';
import '../../styles/general.scss';

function mapDispatchToProps(dispatch: Function) {
  return {
    cancelModal: () => dispatch(hideProfileModal()),
    updateProfile: (...args: UpdateProfileParameters) => dispatch(updateEmployeeProfile(...args)),
  }
}

const EmployeeProfileForm = (
  {employeeList, employee, cancelModal, updateProfile}: 
  {employeeList: Employee[], employee: Employee, cancelModal: Function, updateProfile: Function}
  ) => {

  const {name, dateOfBirth, dateOfEmployment} = employee;

  const submitHandler = (e: React.FormEvent) => {
    /**
     * This is what gets called when Save Changes gets called
     */
    e.preventDefault();
    const newDateOfBirth: Date = convertDateStrToDate(getInputValueById('date-of-birth-input'));
    const newDateOfEmployment: Date = convertDateStrToDate(getInputValueById('date-of-employment-input'));
    const newName: Name = {
      fName: getInputValueById('first-name-input'),
      lName: getInputValueById('last-name-input'),
      mInitial: getInputValueById('middle-initial-input')
    }
    updateProfile(employeeList, employee.id, newName, newDateOfBirth, newDateOfEmployment);
    cancelModal();
  }

  return <Modal.Dialog>

    <Modal.Header closeButton onHide={() => cancelModal()}>
      <Modal.Title>Edit Profile</Modal.Title>
    </Modal.Header>

    <form>
      <label>First Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        id='first-name-input' 
        required={true}
        defaultValue={name.fName}
      />
      <label>Middle Initial</label>
      <input 
        type='text' 
        id='middle-initial-input' 
        defaultValue={(name.mInitial) ? name.mInitial : ''}
        size={1}
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
        }}
      />
      <label>Last Name<span className='required-asterisk'>*</span></label>
      <input 
        type='text' 
        id='last-name-input'
        required={true}
        defaultValue={name.lName}
      />
      <label>Date Of Birth<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        id='date-of-birth-input'
        required={true}
        defaultValue={convertDateToHtmlInput(dateOfBirth)}
      />
      <label>Date Of Employment<span className='required-asterisk'>*</span></label>
      <input 
        type='date' 
        id='date-of-employment-input'
        required={true} 
        defaultValue={convertDateToHtmlInput(dateOfEmployment)}
      />
    </form>

    <Modal.Footer>
      <Button variant='secondary' onClick={() => cancelModal()}>Cancel</Button>
      <Button variant='primary' onClick={submitHandler}>Save Changes</Button>
    </Modal.Footer>

  </Modal.Dialog>

}

export default connect(null, mapDispatchToProps)(EmployeeProfileForm);