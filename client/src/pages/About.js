import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
    <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/mascotinos-hotel-spa-perro-mascota-varios-perros.png">
    </Background>
  
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About us</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            With over 19 years of experience, you can be sure that your dogs and cats are in good hands. 
            </p>
            <p>
            Our open concept allows you to watch your dog and/or cat being pampered by looking through our windows at any time. 
            </p>
            <p>
            Our environment provides your pets a unique experience where stress from all other pet groomers will simply go away. 
            Your furry members of the family are just as happy coming in, as they are going home.
            </p>
          </Col>
        </Row>
  
      </Container>
    </div>
  );
}

export default About;