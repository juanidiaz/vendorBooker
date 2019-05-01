import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
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
    services: [],
    newEvent: [],
    adding: false,
    updating: false
  };

  getUser = (id) => {
    const user = { ...this.state.users.find(user => user._id === id) };
    return user;
  };

  getPet = (id) => {
    const pet = { ...this.state.pets.find(pet => pet._id === id) };
    return pet;
  };

  getService = (id) => {
    const service = { ...this.state.services.find(service => service._id === id) };
    return service;
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
      .then(res => {
        this.setState({ events: res.data });
        // console.log(this.state.events);
      })
      .catch(err => console.log(err));
  };

  loadServices = () => {
    API.getServices()
      .then(res => {
        this.setState({ services: res.data });
        console.log(this.state.services);
      })
      .catch(err => console.log(err));
  };

  toggleConfirmation = (id) => {
    API.getCalendar(id)
      .then(res => {
        API.updateCalendar(res.data._id, { confirmed: !res.data.confirmed })
          .then(() => {
            this.loadEvents();
          })
          .catch(err => console.log(err));
      }).catch(err => console.log(err));
  }

  componentDidMount() {
    const { auth } = { ...this.props };
    if (!auth.uid) return <Redirect to='/client' />

    this.loadEvents();
    this.loadSecUsers();
    this.loadUsers();
    this.loadServices();
  };

  render() {
    return (
      <div>
        <h1>
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
                <h2 style={{ color: "black" }}>
                  Agenda
                </h2>
                {this.state.events.map(event =>
                  <div key={event._id}>
                    <strong>> <Moment format="YYYY-MMMM-DD" >{event.start}</Moment> <span className="text-success"><Moment format="h:mm A" >{event.start}</Moment></span> - <span className="text-danger"><Moment format="h:mm A" add={{ minutes: this.getService(event.serviceID).duration }}>{event.start}</Moment></span></strong>
                    <br />
                    {this.getService(event.serviceID).name} <small>{event.confirmed ? <span className="badge badge-pill badge-primary" onClick={() => this.toggleConfirmation(event._id)}>Confirmed</span> : <span className="badge badge-pill badge-danger" onClick={() => this.toggleConfirmation(event._id)}>Not Confirmed</span>}</small><br />
                    <small>{this.getPet(event.petID).petName} {this.getPet(event.petID).petType === 'Dog' ? (
                      <span className="badge badge-pill badge-success">{this.getPet(event.petID).petType}</span>
                    ) : (
                        <span className="badge badge-pill badge-warning">{this.getPet(event.petID).petType}</span>
                      )} <i><span className="text-muted">Owner: <strong>{this.getUser(event.userID).firstName} {this.getUser(event.userID).lastName}</strong></span></i> </small>
                    <hr />
                  </div>
                )}
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