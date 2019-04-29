import React from "react";
import { Input, TextArea, FormBtn, ListSecUserType } from "../Form";
import Form from 'react-bootstrap/Form';
// import API from "../../utils/API";

export function ReadSecUser(props) {

  let returnOwner = id => {
    // API.getUser(userId)
    //   .then(user => {
    //     console.log(user.data)
    //     return user.data.firstName + ' ' + user.data.lastName;
    //   })
    //   .catch(err => console.log(err));

    let user = {...props.users.find( user => user._id === id)};
    return user;
  };

  return (
    <div>
      <p><b>Name: </b>{props.pet.petName}</p>
      <p><b>Age: </b>{props.pet.petAge}</p>
      <p><b>Breed: </b>{props.pet.petBreed}</p>
      <p><b>Weight: </b>{props.pet.petWeigth}</p>
      {props.pet.petVaccines ? (<p><b>Vaccines: </b>{props.pet.petVaccines}</p>) : null}
      {props.pet.petTag ? (<p><b>Tag: </b>{props.pet.petTag}</p>) : null}
      {props.pet.petBehaviour ? (<p><b>Behaviour: </b>{props.pet.petBehaviour}</p>) : null}
      {props.pet.petNotes ? (<p><b>Notes: </b>{props.pet.petNotes}</p>) : null}
      <p><small>Owner: <span className="text-success">{returnOwner(props.pet.petOwner).firstName} {returnOwner(props.pet.petOwner).lastName}</span></small></p>
      <p><small>Pet type: {props.pet.petType}</small></p>
      <button type="button" className="btn btn-danger btn-sm" onClick={props.handleDeleteSecUser} id={props.pet._id}>Delete</button>
      <button type="button" className="btn btn-success btn-sm ml-4" onClick={props.handleUpdateSecUser} id={props.pet._id}>Update</button>
    </div>
  );
};

export function UpdateSecUser(props) {

  let validateBeforeUpdate = (e) => {
    if (!props.pet.petName || !props.pet.petAge || !props.pet.petBreed || !props.pet.petWeigth) { return }
    props.handleUpdateClick(e, props.pet._id)
  };

  return (
    <div>
      Edit mode
      <p><small>Fields marked <strong>*</strong> as required.</small></p>
      <hr />
      <small>Type of animal: *</small><ListSecUserType
        name="petType"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petType}
      />
      <small>Name: *</small><Input
        name="petName"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petName}
      />
      <small>Age: *</small><Input
        name="petAge"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petAge}
      />
      <small>Breed: *</small><Input
        name="petBreed"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petBreed}
      />
      <small>Weight: *</small><Input
        name="petWeight"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petWeight}
      />
      <small>Vacccines: </small><Input
        name="petVaccines"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petVaccines}
      />
      <small>Tag information: </small><Input
        name="petTag"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petTag}
      />
      <small>Behaviour: </small><Input
        name="petBehaviour"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petBehaviour}
      />
      <small>Notes: </small><TextArea
        name="petNotes"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.petNotes}
      />
      <small>Registered to: *</small><Form.Control name='userId' as="select" size='sm' defaultValue='' onChange={(e) => props.handleValueUpdate(e, props.pet._id)}>
        <option key='' value='' disabled>Select a client...</option>
        {props.users.map(user => (
          <option key={user._id} value={user._id}>{user.firstName} {user.lastName}</option>
        ))}
      </Form.Control>
      <FormBtn
        onClick={props.handleCancelUpdate}
        color={props.colorCancel}
      >
        Cancel
      </FormBtn>
      <FormBtn
        onClick={validateBeforeUpdate}
        color={props.color}
      >
        Update
      </FormBtn>
    </div>
  );
};