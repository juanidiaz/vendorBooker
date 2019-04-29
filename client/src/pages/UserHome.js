import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from 'react-bootstrap/Card'
import API from "../utils/API";

class UserHome extends Component {

  state = {
    pets: [],
    users: [],
    authUser: []
  };

  getAuthUser = () => {
    // console.log(`@UserHome.js: loading users`);
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        const user = { ...this.state.users.find(user => user.uid === localStorage.getItem('uid')) }
        this.setState({ authUser: user });
        // console.log(`@UserHome.js: Authenticated user`);
        // console.log(user);
      })
      .catch(err => console.log(err));
  };

  loadSecUsers = () => {
    API.getSecUsers()
      .then(res => {
        this.setState({ pets: res.data });
        // console.log(this.state.pets);
      })
      .catch(err => console.log(err));
  };

  getPet = (id) => {
    const pet = { ...this.state.pets.find(pet => pet._id === id) };
    return pet;
  };

  componentDidMount() {
    this.loadSecUsers();
    this.getAuthUser();
  };

  render() {

    const { auth } = this.props;
    if (!auth.uid) { return <Redirect to='/signin' /> };

    return (
      <div>

        <Background backgroundImage="https://llppetminding.com.au/wp-content/uploads/2012/10/malibuzeus-and-I-print-2.jpg">
        </Background>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome <strong>{this.state.authUser.firstName} {this.state.authUser.lastName}</strong> to our online booking site</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {this.state.authUser.userType === 'user' ? (
                <div className="alert alert-warning" role="alert">
                  Our system indicates you are a <strong>client</strong>
                </div>
              ) : (
                  <div className="alert alert-danger" role="alert">
                    Our system indicates you are an <strong>administrator</strong>
                  </div>
                )}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                As a pet owner, you do need to groom your pet on a regular schedule. </p>
              <p>
                Our academy-trained Pet Stylists have over 800 hours of hands-on grooming instruction that includes bathing, trimming & styling at least 200 dogs of all breeds & sizes plus annual safety certification.
                We offer complete bath, haircut & walk-in grooming services.
              </p>
              <p>We have flexible appointment times — our services are open 6 days a week.</p>
              <p>Book your pet's salon appointment today!
                <br></br>
                <br></br>
                <button className="btn-warning bookAppBtn">
                  <Link to="/booking">
                    click here to book an appointment
                  </Link>
                </button>
              </p>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>See below the information we have on file. If any of this information is not correct please <a href="mailto:contact@mail.com?Subject=User%20data" target="_top">contact us</a> and let us know the problem. We will be glad to correct it.</p>
              <Card >
                <Card.Body>
                  <Card.Title><h2>User info</h2></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><small>UID: {localStorage.getItem('uid')}</small></Card.Subtitle>
                  <Card.Text>
                    <strong>First name: </strong>{this.state.authUser.firstName}<br />
                    <strong>Last name: </strong>{this.state.authUser.lastName}<br />
                    <strong>Phone: </strong>{this.state.authUser.phone}<br />
                    <strong>Email: </strong>{this.state.authUser.email}<br />
                    <strong>Address: </strong>{this.state.authUser.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {this.state.authUser.petIds ? (
            <span>
              <Row>
                <Col size="md-12">
                  <Card >
                    <Card.Body>
                      <Card.Title><h2>Pet info</h2></Card.Title>
                      {this.state.authUser.petIds.map(petId =>
                        <span>
                          <Card.Subtitle className="mb-2 text-muted"><strong>Type: </strong>{this.getPet(petId).petType}</Card.Subtitle>
                          <Card.Text key={petId}>
                            <strong>Name: </strong>{this.getPet(petId).petName}<br />
                            <strong>Age: </strong>{this.getPet(petId).petAge}<br />
                            <strong>Breed: </strong>{this.getPet(petId).petBreed}<br />
                            <strong>Weight: </strong>{this.getPet(petId).petWeight}<br />
                            <strong>Vaccines: </strong>{this.getPet(petId).petVaccines}<br />
                            <strong>Tag info: </strong>{this.getPet(petId).petTag}<br />
                            <strong>Behaviour: </strong>{this.getPet(petId).petBehaviour}<br />
                          </Card.Text>
                          <hr />
                        </span>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </span>
          ) : (
              <Card.Subtitle className="mb-2 text-muted"><small>You have no pets registered</small></Card.Subtitle>
            )}
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
)(UserHome);