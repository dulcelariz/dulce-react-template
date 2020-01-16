import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { HeaderAuth, SignupForm } from '../../compositions'; 

interface SignupScreenProps {

}

export default class SignupScreen extends React.Component<SignupScreenProps> {

  render() {
    return(
      <Container>
        <Row>
          <Col />
          <Col xs={6}> 
            <HeaderAuth text="Sign Up" />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col xs={6}> 
            <SignupForm />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
