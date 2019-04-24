import React from "react";
import { Input, TextArea, FormBtn, ListSecUserType } from "../Form";

export function ReadSecUser(props) {
  return (
    <div>
      <p><b>Name: </b>{props.pet.petName}</p>
      <p><b>Age: </b>{props.pet.petAge}</p>
      <p><b>Breed: </b>{props.pet.petBreed}</p>
      <p><b>Weight</b>{props.pet.petWeigth}</p>
      <p><b>Tag: </b>{props.pet.petTag}</p>
      <p><b>Vaccines</b>{props.pet.petVaccines}</p>
      <p><b>Behaviour: </b>{props.pet.petBehaviour}</p>
      <p><b>Notes: </b>{props.pet.petNotes}</p>
      <p><small>Pet type: {props.pet.petType}</small></p>
      <button type="button" className="btn btn-danger btn-sm" onClick={props.handleDeleteSecUser} id={props.pet._id}>Delete</button>
      <button type="button" className="btn btn-success btn-sm ml-4" onClick={props.handleUpdateSecUser} id={props.pet._id}>Update</button>
    </div>
  );
};

export function UpdateSecUser(props) {

  return (
    <div>
      Edit mode
      <Input
        name="firstName"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        value={props.pet.firstName}
      />
      <Input
        name="lastName"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        defaultValue={props.pet.lastName}
      />
      <Input
        name="phone"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        defaultValue={props.pet.phone}
      />
      <Input
        name="email"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        defaultValue={props.pet.email}
      />
      <TextArea
        name="address"
        onChange={(e) => props.handleValueUpdate(e, props.pet._id)}
        defaultValue={props.pet.address}
      />
      <FormBtn
        onClick={props.handleCancelUpdate}
        color={props.colorCancel}
      >
        Cancel
      </FormBtn>
      <FormBtn
        onClick={(e) => props.handleUpdateClick(e, props.pet._id)}
        color={props.color}
      >
        Update
      </FormBtn>
    </div>
  );
};
