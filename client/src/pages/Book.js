import React , { Component } from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Calendar from "../components/Calendar"
import NewBooking from "../components/Booking/NewBooking"
import AllBookings from "../components/Booking/AllBookings"
import AllServices from "../components/Services/AllServices"
import ListServices from "../components/Services/ListServices"
import API from "../utils/API";
import DatePicker from "react-datepicker";
import Button from "../components/Button"
import "react-datepicker/dist/react-datepicker.css";
import { FormBtn } from "../components/Form"

class Booking extends Component {
  state = {
    booking: [],
    services: [],
    service: '',
    startDate: '',
    value: '' 
  };

  componentDidMount() {
    this.loadEvents();
    this.loadServices();
  }

loadEvents = () => {
  API.getCalendars()
    .then(res => this.setState({ events: res.data }))
    .catch(err => console.log(err));
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
  console.log(this.state.service)
}

handleSubmitNewBooking = (newBooking) => {
  API.addCalendar(newBooking)
    .then(res => {
      alert(`Appointment has been booked for ${newBooking.startDate} was created!`)
      // this.setState({ adding: false });
      this.loadEvents();

    })
    .catch(err => console.log(err));
};

render() {
  return (
    <div>
      <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
        <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
      </Background>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-10">
            <h1>Book a service for your pet</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-7">

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
            <ListServices
            services = {this.state.services}
            selected={this.state.service}
            onChange={this.handleServiceChange}
            />
            {/* <NewBooking booking={this.state.booking}/> */}
          </Col>
          <Col size="md-4" offset="md-1">
          <Calendar
          events= {this.state.events}
          />
          </Col>
        </Row>
        <FormBtn
                                // disabled={!(this.state.name && this.state.notes)}
                                onClick={this.handleSubmitNewBooking}
                                color="warning"
                            >
                                Book appointment!
              </FormBtn>
      </Container>
    </div>
  );
}
}

export default Booking;