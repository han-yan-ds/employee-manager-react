import React from 'react';
import {connect} from 'react-redux';
import Employee from '../../types/Employee';
import {DatabaseEmployeePatch, DatabaseEmployeePost, State} from '../../types/types';
import {convertDateToHtmlInput, getInputValueById, validateProfileForm } from '../../util/util';
import { BLANKEMPLOYEE } from '../../util/initialState';
import {hideProfileModal, profileFormCheck} from '../../actions/actions';
import {Modal, Button, Form} from 'react-bootstrap';
import '../../styles/general.scss';
import { updateEmployeeList, updateEmployeeInfo, addEmployee } from '../../util/fetches';

function mapStateToProps(st: State) {
  const {profileFormChecked} = st;
  return {profileFormChecked};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    cancelModal: () => {
      dispatch(hideProfileModal());
      dispatch(profileFormCheck(false)); // reset form validation to hide validation
    },
    updateProfile: async (updatedProfile: DatabaseEmployeePatch) => {
      if (validateProfileForm(updatedProfile)) {
        await updateEmployeeInfo(updatedProfile);
        await updateEmployeeList(dispatch);
        dispatch(hideProfileModal());
      } else {
        dispatch(profileFormCheck(true));
      }
    },
    addProfile: async (newProfile: DatabaseEmployeePost) => {
      if (validateProfileForm(newProfile)) {
        await addEmployee(newProfile);
        await updateEmployeeList(dispatch);
        dispatch(hideProfileModal());
      } else {
        dispatch(profileFormCheck(true));
      }
    }
  }
}

const EmployeeProfileForm = (
  {employee, cancelModal, updateProfile, addProfile, profileFormChecked}: 
  {employee: Employee | null, cancelModal: Function, updateProfile: Function, addProfile: Function, profileFormChecked: boolean}
  ) => {
  
  const {name, dateOfBirth, dateOfEmployment} = (employee) ? employee : BLANKEMPLOYEE

  const submitHandler = (e: React.FormEvent) => {
    /**
     * This is what gets called when Save Changes gets called
     */
    e.preventDefault();
    if (employee) {
      const updatedProfile: DatabaseEmployeePatch = {
        uuid: employee.id,
        firstname: getInputValueById('first-name-input'),
        lastname: getInputValueById('last-name-input'),
        middlename: getInputValueById('middle-name-input') || null,
        dob: getInputValueById('date-of-birth-input'),
        doe: getInputValueById('date-of-employment-input'),
      }
      updateProfile(updatedProfile);
    } else {
      const newProfile: DatabaseEmployeePost = {
        firstname: getInputValueById('first-name-input'),
        lastname: getInputValueById('last-name-input'),
        middlename: getInputValueById('middle-name-input') || null,
        dob: getInputValueById('date-of-birth-input'),
        doe: getInputValueById('date-of-employment-input'),
        active: true
      }
      addProfile(newProfile);
    }
  }

  return <Modal.Dialog>

    <Modal.Header closeButton onHide={() => cancelModal()}>
      <Modal.Title>Edit Profile</Modal.Title>
    </Modal.Header>

    <Form noValidate validated={profileFormChecked}>

      <Form.Group controlId="first-name-input">
        <Form.Label>First Name<span className='required-asterisk'>*</span></Form.Label>
        <Form.Control required defaultValue={name.fName}/>
      </Form.Group>

      <Form.Group controlId="middle-name-input">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control defaultValue={(name.mName) ? name.mName : ''}/>
      </Form.Group>

      <Form.Group controlId="last-name-input">
        <Form.Label>Last Name<span className='required-asterisk'>*</span></Form.Label>
        <Form.Control required defaultValue={name.lName}/>
      </Form.Group>

      <Form.Group controlId="date-of-birth-input">
        <Form.Label>Date Of Birth<span className='required-asterisk'>*</span></Form.Label>
        <Form.Control type='date' required defaultValue={convertDateToHtmlInput(dateOfBirth)}/>
      </Form.Group>

      <Form.Group controlId="date-of-employment-input">
        <Form.Label>Date Of Employment<span className='required-asterisk'>*</span></Form.Label>
        <Form.Control type='date' required defaultValue={convertDateToHtmlInput(dateOfEmployment)}/>
      </Form.Group>

    </Form>

    <Modal.Footer>
      <Button variant='secondary' onClick={() => cancelModal()}>Cancel</Button>
      <Button variant='primary' onClick={submitHandler}>Save Changes</Button>
    </Modal.Footer>

  </Modal.Dialog>

}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeProfileForm);