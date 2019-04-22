import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListUserType } from "../Form";

function UpdateUser(props) {

  let newUser = {};

  let handleInputChange = event => {
    const { name, value } = event.target;
    newUser[name] = value;
  };

  let handleSubmitUpdateUser = event => {
    event.preventDefault();

    if (newUser.firstName && newUser.lastName && newUser.phone && newUser.userType) {
      props.handleSubmitUpdateUser(newUser);
      }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Update existing user</h3>
          <form>
            <span>Type of user: </span>
            <ListUserType
              name="userType"
              onChange={handleInputChange}
              text="Type of user (required)"
            //   value=""
            />
            <Input
              name="firstName"
              onChange={handleInputChange}
              placeholder="First name (required)"
            />
            <Input
              name="lastName"
              onChange={handleInputChange}
              placeholder="Last name (required)"
            />
            <Input
              name="phone"
              onChange={handleInputChange}
              placeholder="Phone number (required)"
            />
            <Input
              name="email"
              onChange={handleInputChange}
              placeholder="Email (required)"
            />
            <TextArea
              name="address"
              onChange={handleInputChange}
              placeholder="Address"
            />
            <FormBtn
              onClick={props.handleCancel}
              color={props.colorCancel}
            >
              Cancel
              </FormBtn>
            <FormBtn
              onClick={handleSubmitUpdateUser}
              color={props.color}
            >
              Update!
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateUser;
