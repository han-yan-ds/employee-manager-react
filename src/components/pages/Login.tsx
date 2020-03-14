import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/actions';
import {Modal, Form, Button} from 'react-bootstrap';
import {getInputValueById, isValidCredentials} from '../../util/util';
import crypto from 'crypto';
import { ClickHandler } from '../../types/types';
const shasum = crypto.createHash('sha256');

const loginHandler = async (e: React.FormEvent, onSuccess: Function) => {
  e.preventDefault();
  const username: string = getInputValueById('user-name');
  const hash: string = shasum.update(getInputValueById('pass-word')).digest('hex');
  if (await isValidCredentials(username, hash)) {
    onSuccess();
  } else {
    //onFailure();
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleLogin: () => dispatch(logIn()),
  }
}

const Login = ({handleLogin}: {handleLogin: ClickHandler}) => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Please Log In!</Modal.Title>
    </Modal.Header>
    <Form>
      <Form.Group controlId='user-name'>
        <Form.Label>Username</Form.Label>
        <Form.Control required defaultValue=''/>
      </Form.Group>
      <Form.Group controlId='pass-word'>
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" defaultValue=''/>
      </Form.Group>
    </Form>
    <Modal.Footer>
      <Button variant='primary' onClick={(e: React.MouseEvent) => loginHandler(e, handleLogin)}>Login</Button>
    </Modal.Footer>
  </Modal.Dialog>
)

export default connect(null, mapDispatchToProps)(Login);