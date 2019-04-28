import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn, ListUserType, TextArea } from "../Form";

function NewUser(props) {

  let validateBeforeAdding = (event) => {
    event.preventDefault();

    if (!props.newUser.userType || !props.newUser.firstName || !props.newUser.lastName || !props.newUser.phone || !props.newUser.email) { return }

    props.handleSubmitNewUser()
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Create a new user</h3>
          <form>
            <span>Type of user: </span>
            <ListUserType
              name="userType"
              onChange={props.handleAddValueUpdate}
              text="Type of user (required)"
            />
            <Input
              name="firstName"
              onChange={props.handleAddValueUpdate}
              placeholder="First name (required)"
            />
            <Input
              name="lastName"
              onChange={props.handleAddValueUpdate}
              placeholder="Last name (required)"
            />
            <Input
              name="phone"
              onChange={props.handleAddValueUpdate}
              placeholder="Phone number (required)"
            />
            <Input
              name="email"
              onChange={props.handleAddValueUpdate}
              placeholder="Email (required)"
            />
            <TextArea
              name="address"
              onChange={props.handleAddValueUpdate}
              placeholder="Address"
            />
            <FormBtn
              onClick={props.handleCancel}
              color={props.colorCancel}
            >
              Cancel
              </FormBtn>
            <FormBtn
              onClick={validateBeforeAdding}
              color={props.color}
            >
              Create new User
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewUser;
