import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface SignupFormProps {
  
}

export default class SignupForm extends React.Component<SignupFormProps> {
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
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    );
  }
}
