import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface LoginFormProps {
  
}

export default class LoginForm extends React.Component<LoginFormProps> {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Sign up
        </Button>
        <Button variant="link" type="submit">
          Forgot password?
        </Button>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}
