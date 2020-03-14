import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {getInputValueById} from '../../util/util';


const loginHandler = (e: React.FormEvent) => {
  e.preventDefault();
  const userName: string = getInputValueById('user-name');
  const password: string = getInputValueById('pass-word');

  console.log(userName, password);
}

const Login = () => (
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
      <Button variant='primary' onClick={loginHandler}>Login</Button>
    </Modal.Footer>
  </Modal.Dialog>
)

export default Login;