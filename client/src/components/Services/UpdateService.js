import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListDuration } from "../Form";

function UpdateService(props) {

  let updateService = {};

  let handleInputChange = event => {
    const { name, value } = event.target;
    updateService[name] = value;
  };

  let handleSubmitUpdateService = event => {
    event.preventDefault();

    if (updateService.name && updateService.description && updateService.duration && updateService.price) {
      props.handleSubmitUpdateService(updateService);
      }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Update a service</h3>
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
              onClick={props.handleCancel}
              color={props.colorCancel}
            >
              Cancel
              </FormBtn>
            <FormBtn
              onClick={handleSubmitUpdateService}
              color={props.color}
            >
              Create update Service
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateService;
