import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Calendar from "../components/Calendar"
import ListServices from "../components/Services/ListServices"
import API from "../utils/API";
import DatePicker from "react-datepicker";
import "../components/Calendar/react-datepicker.css";
import { FormBtn } from "../components/Form"
import ListSecUsers from "../components/SecUsers/ListSecUsers"
// import NewBooking from "../components/Booking/NewBooking"

class Booking extends Component {
  state = {
    booking: {},
    newBooking: {},
    services: [],
    secondaryUsers: [],
    title: '',
    start: '',
    value: '',
    events: [],
    userID: '',
    currentUser: [],
    pet: '',
    users: []
  };

  componentDidMount() {
    this.loadEvents();
    this.loadServices();
    // this.checkUser();
    this.getAuthUser();
    this.loadSecUsers();
    this.getPetsForUser();
    }

  getAuthUser = () => {
    console.log(`@UserHome.js: loading users`);
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        const user = { ...this.state.users.find(user => user.uid === localStorage.getItem('uid')) }
        this.setState({ currentUser: user });
        console.log(`@UserHome.js: Authenticated user`);
        console.log(user);
        // console.log(this.state.c)
      })
      .catch(err => console.log(err));
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      })
      .catch(err => console.log(err));
  };

getPetsForUser = () => {
  // const pet = this.state.currentUser.pet
  console.log(this.state.currentUser.petIDs)
  // API.getSecUser()
}

// checkUser = () => {
//   let UID=localStorage.getItem("uid")
//   console.log(UID)
//   this.setState({userID: UID})
//   API.getUserUID(UID)
//   .then(res => this.setState({currentUser: res.data}))
//   // console.log(this.state.currentUser)
//   .catch(err => console.log(err));
// }

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

loadEvents = () => {
  API.getCalendars()
    .then(res => this.setState({ events: res.data }))
    // console.log(this.state.events)
    .catch(err => console.log(err));
};

loadSecUsers = () => {
  API.getSecUsers()
    .then(res => {
      this.setState({ secondaryUsers: res.data });
      console.log(this.state.secondaryUsers);
    })
    .catch(err => console.log(err));
};

loadServices = () => {
  API.getServices()
    .then(res => this.setState({ services: res.data }))
    .catch(err => console.log(err));
};

handleDateChange = (date) => {
  this.setState({
    start: date
  });
}

handleServiceChange = (Service) => {
  this.setState({
    title: Service
  })
  // console.log(this.state.service)
}

handleSubmitNewBooking = () => {

  API.addCalendar(this.state.booking)
  .then(res => {
    alert(`Appointment for ${this.state.start} has been requested and will be confirmed shortly.`)
      this.loadEvents();
    })
    .catch(err => console.log(err));
};

handleValueChange = (event) => {
  console.log(`name=${event.target.name}     value=${event.target.value}`)
  const { name, value } = event.target;
  const newApp =
  {
    ...this.state.booking,
    start: this.state.start,
    userID: this.state.currentUser._id,
    petID: this.state.pet._id,
    // serviceID: this.state.service._id,

   };
  newApp[name] = value;

  this.setState({
    start: this.state.start,
    booking: newApp,

  })
  console.log(this.state.booking)
  console.log(newApp)
};

render() {
  const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
  return (
    <div>
      <Background backgroundImage="https://alextimes.com/wp-content/uploads/2018/02/cat-with-a-heart-696x364.jpeg">
      </Background>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-10">
            <h1>Welcome, {this.state.currentUser.firstName}, please book a service for your pet</h1>
            <br/><br/>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
          <p>When would you like?</p>
          <DatePicker
                                name="datetime"
                                selected={this.state.start}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="yyyy-mm-dd h:mm aa"
                                timeCaption="time"
                            />
                            <br /><br />
            What do you need done?
            <ListServices
            name="serviceID"
            services = {this.state.services}
            selected={this.state.title}
            onChange={this.handleValueChange}
            />
            {/* <NewBooking booking={this.state.booking}/> */}
            <br /><br />
            For what pet?
            <ListSecUsers
            name="petID"
            pets = {this.state.secondaryUsers}
            selected={this.state.pet}
            onChange={this.handleValueChange}
            />
          </Col>
          <Col size="lg-7" offset="md-1">
          <Calendar
          events= {this.state.events}
          />
          </Col>
        </Row>
        <br /><br />

        <FormBtn
                                disabled={!(this.state.start && this.state.newBooking)}
                                onClick={this.handleSubmitNewBooking}
                                color="primary"
                            >
                                Book appointment!
              </FormBtn>
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
)(Booking);