import React from 'react';
import {connect} from 'react-redux';
import Employee from '../../types/Employee';
import {DatabaseEmployeePatch} from '../../types/types';
import {convertDateToHtmlInput, getInputValueById} from '../../util/util';
import {hideProfileModal} from '../../actions/actions';
import {Modal, Button, Form} from 'react-bootstrap';
import '../../styles/general.scss';
import { updateEmployeeList, updateEmployeeInfo } from '../../util/fetches';

function mapDispatchToProps(dispatch: Function) {
  return {
    cancelModal: () => dispatch(hideProfileModal()),
    updateProfile: async (newProfile: DatabaseEmployeePatch) => {
      await updateEmployeeInfo(newProfile);
      await updateEmployeeList(dispatch);
    }
  }
}

const EmployeeProfileForm = (
  {employee, cancelModal, updateProfile}: 
  {employee: Employee, cancelModal: Function, updateProfile: Function}
  ) => {

  const {name, dateOfBirth, dateOfEmployment} = employee;

  const submitHandler = (e: React.FormEvent) => {
    /**
     * This is what gets called when Save Changes gets called
     */
    e.preventDefault();
    const newProfile: DatabaseEmployeePatch = {
      uuid: employee.id,
      firstname: getInputValueById('first-name-input'),
      lastname: getInputValueById('last-name-input'),
      middlename: getInputValueById('middle-name-input') || null,
      dob: getInputValueById('date-of-birth-input'),
      doe: getInputValueById('date-of-employment-input'),
    }
    updateProfile(newProfile);
    cancelModal();
  }

  return <Modal.Dialog>

    <Modal.Header closeButton onHide={() => cancelModal()}>
      <Modal.Title>Edit Profile</Modal.Title>
    </Modal.Header>

    <Form>

      <Form.Group controlId="first-name-input">
        <Form.Label>First Name<span className='required-asterisk'>*</span></Form.Label>
        <Form.Control required defaultValue={name.fName}/>
      </Form.Group>

      <Form.Group controlId="middle-name-input">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control required defaultValue={(name.mName) ? name.mName : ''}/>
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

export default connect(null, mapDispatchToProps)(EmployeeProfileForm);