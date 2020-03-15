import React from 'react';
import {connect} from 'react-redux';
import {logIn, showLoginFailure} from '../../actions/actions';
import {Modal, Form, Button} from 'react-bootstrap';
import {getInputValueById} from '../../util/util';
import {isValidCredentials} from '../../util/fetches';
import crypto from 'crypto';
import { ClickHandler } from '../../types/types';

const loginHandler = async (e: React.FormEvent, onSuccess: Function, onFailure: Function) => {
  e.preventDefault();
  const shasum = crypto.createHash('sha256');
  const username: string = getInputValueById('user-name');
  const hash: string = shasum.update(getInputValueById('pass-word')).digest('hex');
  (await isValidCredentials(username, hash)) ? onSuccess() : onFailure();
}

function mapStateToProps({showLoginFailure}: {showLoginFailure: boolean}) {
  return {showLoginFailure};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleLogin: () => {
      dispatch(logIn());
      dispatch(showLoginFailure(false));
    },
    handleFailedLogin: () => dispatch(showLoginFailure(true))
  }
}

const Login = ({showLoginFailure, handleLogin, handleFailedLogin}: 
  {showLoginFailure: boolean, handleLogin: ClickHandler, handleFailedLogin: Function}) => {

  const showLoginFeedback = () => (showLoginFailure) ? <div className='error'>Login Failed, Please Try Again</div> : null;

  return <Modal.Dialog>
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
      {showLoginFeedback()}
    </Form>
    <Modal.Footer>
      <Button variant='primary' onClick={(e: React.MouseEvent) => loginHandler(e, handleLogin, handleFailedLogin)}>Login</Button>
    </Modal.Footer>
  </Modal.Dialog>
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);