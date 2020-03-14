import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';



const Login = () => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Please Log In!</Modal.Title>
    </Modal.Header>
    <Form>
      <Form.Group controlId='user-name'>
        <Form.Label>Username</Form.Label>
        <Form.Control required/>
      </Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" />
    </Form>
    <Modal.Footer>
      <Button variant='primary' onClick={() => console.log('clicked')}>Login</Button>
    </Modal.Footer>
  </Modal.Dialog>
)

export default Login;