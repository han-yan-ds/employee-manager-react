import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {getInputValueById} from '../../util/util';
import crypto from 'crypto';

const SERVERURL = 'http://localhost:9001';

const shasum = crypto.createHash('sha256');

const loginHandler = async (e: React.FormEvent) => {
  e.preventDefault();
  const username: string = getInputValueById('user-name');
  const hash: string = shasum.update(getInputValueById('pass-word')).digest('hex');
  
  const response = await fetch(`${SERVERURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, hash})
  });

  const isLoggedIn = await response.json();
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