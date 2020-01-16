import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { HeaderAuth, ChangePasswordForm } from '../../compositions'; 

interface ChangePasswordScreenProps {

}

export default class ChangePasswordScreen extends React.Component<ChangePasswordScreenProps> {

  render() {
    return(
      <Container>
        <Row>
          <Col />
          <Col xs={6}> 
            <HeaderAuth text="Change your password" />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col xs={6}> 
            <ChangePasswordForm />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
