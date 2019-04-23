import React, { Component } from "react";
import Background from "../components/Background";
import Container from "../components/Container";
// import Button from "../components/Button";
import Row from "../components/Row";
import Col from "../components/Col";
// import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div className="textUnderLogo">
          <button style={{marginLeft: "200px", marginTop: "-70px"}} className="btn btn-primary" onClick={this.logout}>
            Logout Session
          </button>
        </div>
      ) : (
          <div >
            {/* blank div */}
          </div>
        );

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
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3 logoBox">
                <img className="logo" alt="logo" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_300,w_600/v1555380182/logo_final_PARA_PAGINA_WEB_Amazing_Pet_Grooming.png"
                ></img>
              </div> */}
              <div className="col-md-3 mainContent">
                {mainContent}
              </div>
              <div>


              </div>

            </div>
          </div>
        </div>
      );
    }
  }
);
