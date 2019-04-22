import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Calendar from "../components/Calendar"
import NewBooking from "../components/Booking/NewBooking"

function Services() {
  return (
    <div>
      <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
        <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
      </Background>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-10">
            <h1>Book a service for your pet</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-7">

            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <NewBooking />
          </Col>
          <Col size="md-4" offset="md-1">
          <Calendar />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Services;