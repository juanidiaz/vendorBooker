import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListSecUserType } from "../Form";

function NewSecUser(props) {

  let newSecUser = {};

  let handleInputChange = event => {
    const { name, value } = event.target;
    newSecUser[name] = value;
  };

  let handleSubmitNewSecUser = event => {
    event.preventDefault();

    if (newSecUser.firstName && newSecUser.lastName && newSecUser.phone && newSecUser.secuserType) {
      props.handleSubmitNewSecUser(newSecUser);
      }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Create a new secuser</h3>
          <form>
            <span>Type of secuser: </span>
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
              onClick={handleSubmitNewSecUser}
              color={props.color}
            >
              Create new SecUser
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewSecUser;
