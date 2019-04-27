import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class AdminHome extends Component {
  
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/client' /> 

    return (
      
      <div>
        <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
          <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
        </Background>

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-10">
              <h1>Administrator panel</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-10">
              <a href="/admin/services" className="badge badge-warning mr-2">Manage Services</a>
              <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
              <a href="/" className="badge badge-warning mr-2">Admin Home</a>
              {/* <LogOutBtnAdmin /> */}

              {/* <p>
                Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
              <p>
                Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p> */}
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(AdminHome);
