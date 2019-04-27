// import React from "react";
// import { Col, Row, Container } from "../Grid";
// import { Input, TextArea, FormBtn, ListDuration } from "../Form";
// import DatePicker from "react-datepicker";
// import AllServices from "../Services/AllServices"
// import ListServices from "../Services/ListServices"

// import "react-datepicker/dist/react-datepicker.css";

// function NewBooking(props) {

//     // this.state={
//     //     services: [],
//     //     booking: []
//     // }
//     // let newBooking = {};

//     // // this.state = {
//     // //     startDate: new Date()
//     // //   };

//     // let handleInputChange = event => {
//     //   let { name, value } = event.target;
//     //   newBooking[name] = value;
//     // };

//     // let handleDateChange = date => {
//     //     this.setState({
//     //       startDate: date
//     //     });
//     //   }

//     let handleSubmitNewBooking = event => {
//       event.preventDefault();

//       if (newBooking.name && newBooking.notes) {
//         props.handleSubmitNewBooking(newBooking);
//         }
//     };

//     console.log(props)
//     // this.state = {
//     //     startDate: new Date()
//     //   };

//         // return (
//         //     <Container fluid>
//         //         <Row>
//         //             <Col size="md-10">
//         //                 <h3>Book a visit with us!</h3>
//         //                 <form>
//                             {/* <DatePicker
//                                 name="datetime"
//                                 // selected={this.state.startDate}
//                                 onChange={handleDateChange}
//                                 showTimeSelect
//                                 timeFormat="HH:mm"
//                                 timeIntervals={15}
//                                 dateFormat="MMMM d, yyyy h:mm aa"
//                                 timeCaption="time"
//                             />
//                             <Input
//                                 name="name"
//                                 onChange={handleInputChange}
//                                 placeholder="Your name (required)"
//                             />
//                             <TextArea
//                                 name="notes"
//                                 onChange={handleInputChange}
//                                 placeholder="Notes"
//                             /> */}

//                             {/* <FormBtn
//                                 // disabled={!(this.state.name && this.state.notes)}
//                                 onClick={handleSubmitNewBooking}
//                                 color="warning"
//                             >
//                                 Book appointment!
//               </FormBtn> */}
//         //                 </form>
//         //             </Col>
//         //         </Row>
//         //     </Container>
//         // );
//     }

// export default NewBooking;