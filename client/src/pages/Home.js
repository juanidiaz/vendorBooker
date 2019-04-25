import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {

  return (
    <div>
      <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
        <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
      </Background>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-10">
            <h2 style={{ color: "black" }}>
              Call us at: 905 878 9009 / 905 878 5557
            </h2>
            <a href="/about" class="badge badge-danger mr-2">About us</a>
            <a href="/services" class="badge badge-danger mr-2">Services</a>
            <a href="/booking" class="badge badge-danger mr-2">Book appointment</a>
            <a href="/login" class="badge badge-danger mr-2">Log in</a>
            {/* <Button
              // onClick={routeChange('/services')}
              color='primary'
            >Services</Button>
            <Button
              // onClick={this.handleAddService}
              color='primary'
            >Log in</Button> */}

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;