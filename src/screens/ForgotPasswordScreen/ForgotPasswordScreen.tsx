import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { HeaderAuth, ForgotPasswordForm } from '../../compositions'; 

interface ForgotPasswordScreenProps {

}

export default class ForgotPasswordScreen extends React.Component<ForgotPasswordScreenProps> {

  render() {
    return(
      <Container>
        <Row>
          <Col />
          <Col xs={6}> 
            <HeaderAuth text="Forgot your password?" />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col xs={6}> 
            <ForgotPasswordForm />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
