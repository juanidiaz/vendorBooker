import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import NewService from '../components/Services/NewService';
import Button from 'react-bootstrap/Button';
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
        <h1>Amazing Pet Grooming</h1>
        <h2>We are the best in Canada!</h2>
      </Background>
      XXXXXXXXXXX
      <NewService />
      yyyyyy
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Our Grooming Website!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              With over 18 years of experience, you can be sure that your dogs and cats are in good hands.
              Our open concept allows you to watch your dogs and/or cat to be pampered with love.
              Our environment provides your pets with a unique experience, free from stress.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default About;