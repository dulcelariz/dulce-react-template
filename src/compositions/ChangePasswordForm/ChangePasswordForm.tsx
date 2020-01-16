import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface ChangePasswordFormProps {
  
}

export default class ChangePasswordForm extends React.Component<ChangePasswordFormProps> {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="New password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm new password" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}
