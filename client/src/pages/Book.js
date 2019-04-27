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
    service: '',
    start: '',
    value: '',
    events: []
  };

  componentDidMount() {
    this.loadEvents();
    this.loadServices();
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
    startDate: date
  });
}

handleServiceChange = (Service) => {
  this.setState({
    service: Service
  })
  // console.log(this.state.service)
}

handleSubmitNewBooking = (newBooking) => {

  // console.log(this.state)
  // console.log(newBooking)
  this.setState({
    booking: {
      title: this.state.service,
      start: this.state.start
    }
  })
  console.log(this.state.booking)
  API.addCalendar(this.state.booking)
  .then(res => {
    alert(`Appointment for ${this.state.service} has been booked for ${newBooking.start} has been requested!`)
      this.loadEvents();
    })
    .catch(err => console.log(err));
};

render() {
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
          <Col size="md-7">
          <p>When would you like?</p>
          <DatePicker
                                name="datetime"
                                selected={this.state.startDate}
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
            services = {this.state.services}
            selected={this.state.service}
            onChange={this.handleServiceChange}
            />
            {/* <NewBooking booking={this.state.booking}/> */}
            <br /><br />
            {/* For what pet? */}
          </Col>
          <Col size="md-4" offset="md-1">
          <Calendar
          events= {this.state.events}
          />
          </Col>
        </Row>
        <br /><br />

        <FormBtn
                                disabled={!(this.state.startDate && this.state.service)}
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

export default Booking;
