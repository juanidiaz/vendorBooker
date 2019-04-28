import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListSecUserType } from "../Form";
import Form from 'react-bootstrap/Form';

function NewSecUser(props) {

  // let newSecUser = {};

  // let handleInputChange = event => {
  //   const { name, value } = event.target;
  //   newSecUser[name] = value;
  // };

  // let handleSubmitNewSecUser = event => {
  //   event.preventDefault();

  //   if (newSecUser.petType && newSecUser.petName && newSecUser.petAge && newSecUser.petBreed && newSecUser.petWeight && newSecUser.userId) {
  //     props.handleSubmitNewSecUser(newSecUser);
  //   }
  // };

  let validateBeforeAdding = (event) => {
    event.preventDefault();
    if (!props.newPet.petType || !props.newPet.petName || !props.newPet.petAge || !props.newPet.petBreed || !props.newPet.petWeigth || !props.newPet.userId) { return }

    props.handleSubmitNewSecUser()
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <h3>Create a new pet</h3>
          <small>Fields marked <strong>*</strong> as required.</small>
          <form>
            <small>Type of animal: *</small><ListSecUserType
              name="petType"
              onChange={props.handleAddValueUpdate}
              text="Type of animal (required)"
            />
            <small>Name: *</small><Input
              name="petName"
              onChange={props.handleAddValueUpdate}
              text="Name (required)"
            />
            <small>Age: *</small><Input
              name="petAge"
              onChange={props.handleAddValueUpdate}
              text="Age (required)"
            />
            <small>Breed: *</small><Input
              name="petBreed"
              onChange={props.handleAddValueUpdate}
              text="Breed (required)"
            />
            <small>Weigth: *</small><Input
              name="petWeigth"
              onChange={props.handleAddValueUpdate}
              text="Weight (required)"
            />
            <small>Vacccines: </small><Input
              name="petVaccines"
              onChange={props.handleAddValueUpdate}
              text="Vaccination"
            />
            <small>Tag information: </small><Input
              name="petTag"
              onChange={props.handleAddValueUpdate}
              text="Tag number/code"
            />
            <small>Behaviour: </small><Input
              name="petBehaviour"
              onChange={props.handleAddValueUpdate}
              text="Behaviour"
            />
            <small>Notes: </small><TextArea
              name="petNotes"
              onChange={props.handleAddValueUpdate}
              text="Notes"
            />
            <small>Registered to: *</small><Form.Control name='userId' as="select" size='sm' defaultValue='' onChange={props.handleAddValueUpdate}>
              <option key='' value='' disabled>Select a client...</option>
              {props.users.map(user => (
                <option key={user._id} value={user._id}>{user.firstName} {user.lastName}</option>
              ))}
            </Form.Control>
            <br />
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
              Create new pet
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewSecUser;
