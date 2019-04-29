import React from "react";
import { Input, TextArea, FormBtn, ListUserType } from "../Form";
// import API from "../../utils/API";

export function ReadUser(props) {

  let returnPet = id => {
    // API.getSecUser(id)
    //   .then(pet => {
    //     console.log(pet.data.petName)
    //     return pet.data.petName;
    //   })
    //   .catch(err => console.log(err));

    let pet = {...props.pets.find( pet => pet._id === id)};
    return pet;
  };

  return (
    <div>
      <p><small><i>UID (Firebase): {props.user.uid}</i></small></p>    
      <p><b>Phone: </b>{props.user.phone}</p>
      <p><b>Email: </b>{props.user.email}</p>
      <p><b>Address: </b>{props.user.address}</p>
      <p><small>User type: {props.user.userType}</small></p>
      <p><small>This user owns:</small></p>
      {props.user.petIds.map((petId) =>
        <p key={petId}>- <span className="text-success">{returnPet(petId).petName}</span><small> ({returnPet(petId).petType})</small></p>
      )}
      <button type="button" className="btn btn-danger btn-sm" onClick={props.handleDeleteUser} id={props.user._id}>Delete</button>
      <button type="button" className="btn btn-success btn-sm ml-4" onClick={props.handleUpdateUser} id={props.user._id}>Update</button>
    </div>
  );
};

export function UpdateUser(props) {

  let validateBeforeUpdate = (e) => {
    if (!props.user.firstName || !props.user.lastName || !props.user.phone || !props.user.email) { return }
    props.handleUpdateClick(e, props.user._id)
  };

  return (
    <div>
      Edit mode
      <p><small>Fields marked <strong>*</strong> as required.</small></p>
      <hr />
      <small>Type of account: *</small><ListUserType
        name="userType"
        handleValueUpdate={props.handleValueUpdate}
        user={props.user}
        // onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        text={props.user.userType}
      />
      <small>First name: *</small><Input
        name="firstName"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        value={props.user.firstName}
      />
      <small>Last name: *</small><Input
        name="lastName"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.lastName}
      />
      <small>Phone: *</small><Input
        name="phone"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.phone}
      />
      <small>Email: *</small><Input
        name="email"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.email}
      />
      <small>Address:</small><TextArea
        name="address"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.address}
      />
      <small>UID (Firebase): *</small><Input
        name="uid"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.uid}
      />
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
