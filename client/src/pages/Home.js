import React, { Component } from "react";
import Background from "../components/Background";
import Container from "../components/Container";
// import Button from "../components/Button";
import Row from "../components/Row";
import Col from "../components/Col";


export default class Home extends Component {
  render() {

    return (
      <div>
        <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
          <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
        </Background>

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h2 style={{ color: "black" }}>
                Call us at: 905 878 9009 / 905 878 5557
                  </h2>

              <a href="/about" className="badge badge-danger mr-2">About us</a>
              <a href="/services" className="badge badge-danger mr-2">Services</a>
              <a href="/admin" className="badge badge-danger mr-2">Admin</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
