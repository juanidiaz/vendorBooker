import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListSecUserType } from "../Form";
import Form from 'react-bootstrap/Form';

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
          <h3>Create a new pet</h3>
          <form>

            <Form.Label>This pet is linked to user:</Form.Label>
            <Form.Control as="select" size='sm'>
              {props.users.map(user => (
                <option>{user.firstName} {user.lastName}</option>
              ))}
            </Form.Control>

            <small>Type of animal: </small><ListSecUserType
              name="petType"
              onChange={handleInputChange}
              text="Type of animal (required)"
            />
            <small>Name: </small><Input
              name="petName"
              onChange={handleInputChange}
              text="Name (required)"
            />
            <small>Age: </small><Input
              name="petAge"
              onChange={handleInputChange}
              text="Age (required)"
            />
            <small>Breed: </small><Input
              name="petBreed"
              onChange={handleInputChange}
              text="Breed (required)"
            />
            <small>Weight: </small><Input
              name="petWeight"
              onChange={handleInputChange}
              text="Weight (required)"
            />
            <small>Vacccines: </small><Input
              name="petVaccines"
              onChange={handleInputChange}
              text="Vaccination"
            />
            <small>Tag information: </small><Input
              name="petTag"
              onChange={handleInputChange}
              text="Tag number/code"
            />
            <small>Behaviour: </small><Input
              name="petBehaviour"
              onChange={handleInputChange}
              text="Behaviour"
            />
            <small>Notes: </small><TextArea
              name="petNotes"
              onChange={handleInputChange}
              text="Notes"
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
              Create new pet
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewSecUser;
