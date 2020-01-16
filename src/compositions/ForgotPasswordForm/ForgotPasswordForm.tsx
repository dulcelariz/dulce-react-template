import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface ForgotPasswordFormProps {
  
}

export default class ForgotPasswordForm extends React.Component<ForgotPasswordFormProps> {
  render() {
    return (
      <Form>
        <Form.Text className="text-muted">
          Enter your email to receive an email to recovery password.
        </Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Recovery
        </Button>
      </Form>
    );
  }
}
