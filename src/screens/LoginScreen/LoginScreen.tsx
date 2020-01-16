import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { HeaderAuth, LoginForm } from '../../compositions'; 

interface LoginScreenProps {

}

export default class LoginScreen extends React.Component<LoginScreenProps> {

  render() {
    return(
      <Container>
        <Row>
          <Col />
          <Col xs={6}> 
            <HeaderAuth text="Login" />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col xs={6}> 
            <LoginForm />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
