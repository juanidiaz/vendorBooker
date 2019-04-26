import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Services() {
  return (
    <div>
      <Background backgroundImage="https://alextimes.com/wp-content/uploads/2018/02/cat-with-a-heart-696x364.jpeg">
      </Background>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-10">
              <h1>Book a service for your pet</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
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
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(Services);