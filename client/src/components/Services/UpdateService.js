import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListDuration } from "../Form";

function NewService(props) {

  let handleInputChange = event => {
    const { name, value } = event.target;
    newService[name] = value;
  };

  let handleSubmitNewService = event => {
    event.preventDefault();

    if (newService.name && newService.description && newService.duration && newService.price) {
      props.handleSubmitNewService(newService);
      }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Manage services</h3>
          <form>
            <Input
              name="name"
              onChange={handleInputChange}
              placeholder="Service name (required)"
            />
            <TextArea
              name="description"
              onChange={handleInputChange}
              placeholder="Description (required)"
            />
            <ListDuration
              name="duration"
              onChange={handleInputChange}
              text="Duration (required)"
            />
            <Input
              name="price"
              onChange={handleInputChange}
              placeholder="Price (required)"
            />
            <Input
              name="specialPrice"
              onChange={handleInputChange}
              placeholder="Special price"
            />
            <Input
              name="cost"
              onChange={handleInputChange}
              placeholder="Cost"
            />
            <Input
              name="images"
              onChange={handleInputChange}
              placeholder="Path to images"
            />
            <TextArea
              name="notes"
              onChange={handleInputChange}
              placeholder="Notes"
            />
            <FormBtn
              // disabled={!(newService.name && newService.description && newService.duration && newService.price)}
              onClick={props.handleCancel}
              color={props.colorCancel}
            >
              Cancel
              </FormBtn>
            <FormBtn
              // disabled={!(newService.name && newService.description && newService.duration && newService.price)}
              onClick={handleSubmitNewService}
              color={props.color}
            >
              Create new Service
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewService;
