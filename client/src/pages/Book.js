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
import "react-datepicker/dist/react-datepicker.css";
import { FormBtn } from "../components/Form"
// import NewBooking from "../components/Booking/NewBooking"

class Booking extends Component {
  state = {
    booking: {},
    services: [],
    title: '',
    start: '',
    value: '',
    events: [],
    userUID: '',
    currentUser: []
  };

  componentDidMount() {
    this.loadEvents();
    this.loadServices();
    this.checkUser();
    this.getAuthUser();
    }

  getAuthUser = () => {
    console.log(`@UserHome.js: loading users`);
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        const user = { ...this.state.users.find(user => user.uid === localStorage.getItem('uid')) }
        this.setState({ authUser: user });
        console.log(`@UserHome.js: Authenticated user`);
        console.log(user);
      })
      .catch(err => console.log(err));
  };


checkUser = () => {
  let UID=localStorage.getItem("uid")
  console.log(UID)
  this.setState({userUID: UID})
  API.getUserUID(UID)
  .then(res => this.setState({currentUser: res.data}))
  // console.log(this.state.currentUser)
  .catch(err => console.log(err));
}

loadEvents = () => {
  API.getCalendars()
    .then(res => this.setState({ events: res.data }))
    console.log(this.state.events)
    // .catch(err => console.log(err));
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
const newBooking = {
  // user: ,
  // secondUserId:,
  title: this.state.newBooking,
  start: this.state.start
}
  API.addCalendar(newBooking)
  .then(res => {
    alert(`Appointment for ${this.state.booking.service} has been booked for ${this.state.start} has been requested!`)
      this.loadEvents();
    })
    .catch(err => console.log(err));
};

handleValueChange = (event) => {
  console.log(`name=${event.target.name}     value=${event.target.value}`)
  const { name, value } = event.target;
  const newApp =
  {
    ...this.state.newBooking,
    start: this.state.start
   };
  newApp[name] = value;

  this.setState({
    start: this.state.start,
    newBooking: newApp
  })
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
            <h1>Welcome {this.state.currentUser}</h1>
            <h1>Book a service for your pet</h1>
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
            name="services"
            services = {this.state.services}
            selected={this.state.service}
            onChange={this.handleServiceChange}
            />
            {/* <NewBooking booking={this.state.booking}/> */}
            <br /><br />
            {/* For what pet? */}
          </Col>
          <Col size="lg-7" offset="md-1">
          <Calendar
          events= {this.state.events}
          />
          </Col>
        </Row>
        <br /><br />

        <FormBtn
                                disabled={!(this.state.start && this.state.title)}
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