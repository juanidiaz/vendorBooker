import React, { Component } from 'react';
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import Calendar from "../components/Calendar"
import API from "../utils/API";
import "./index.css"
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class ManageCalendar extends Component {

  state = {
    users: [],
    pets: [],
    events: [],
    newEvent: [],
    adding: false,
    updating: false
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        // console.log(this.state.users);
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

  loadEvents = () => {
    API.getCalendars()
      .then(res => this.setState({ events: res.data }))
    console.log(this.state.events)
    // .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>
          {/* <img src='/images/logo_300.png' style={{ width: '150px', marginLeft: '10px', marginTop: '10px' }} alt='logo 300' /> */}
          &nbsp;&nbsp;&nbsp;&nbsp;Administrator panel
        </h1>
        {/* <hr /> */}
        <div style={{ background: "white" }}>
          <Container>
            <Row>
              <Col size="md-10">
                <div>
                  <a href="/admin" className="badge badge-info mr-2">Administrator panel</a>
                  <a href="/admin/services" className="badge badge-warning mr-2">Manage Services</a>
                  <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
                  <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a>
                  {/* <a href="/admin/calendar" className="badge badge-warning mr-2">Manage Bookings</a> */}
                </div>
                <h2 style={{ color: "black" }}>
                  Managing Bookings
                </h2>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <Calendar
                  events={this.state.events}
                />
              </Col>
              <Col size="md-6">

              </Col>
            </Row>
            <Row>
              <Col size="md-10">
                <hr />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };

  componentDidMount() {
    const { auth } = { ...this.props };
    if (!auth.uid) return <Redirect to='/client' />

    this.loadEvents();
    this.loadSecUsers();
    this.loadUsers();
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCalendar);