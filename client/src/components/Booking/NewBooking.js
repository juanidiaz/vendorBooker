import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListDuration } from "../Form";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

// function newBooking(props) {
class NewBooking extends Component {

    state = {
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let newBooking = {
            datetime: this.state.datetime,
            name: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            notes: this.state.notes,
        };

        console.log(newBooking);

        // if (this.state.name && this.state.description && this.state.duration && this.state.price) {
        //     API.addCalendar(addCalendar)
        //         .then(res => this.loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <h3>Book a visit with us!</h3>
                        <form>
                            <DatePicker
                                name="datetime"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />
                            <Input
                                name="name"
                                onChange={this.handleInputChange}
                                placeholder="Your name (required)"
                            />
                            <TextArea
                                name="notes"
                                onChange={this.handleInputChange}
                                placeholder="Notes"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.description && this.state.duration && this.state.price)}
                                onClick={this.handleFormSubmit}
                                color="warning"
                            >
                                Create new Service
              </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewBooking;