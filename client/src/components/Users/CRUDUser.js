import React from "react";
import { Input, TextArea, FormBtn, ListUserType } from "../Form";

export function ReadUser(props) {
  return (
    <div>
      <p><b>Phone: </b>{props.user.phone}</p>
      <p><b>Email: </b>{props.user.email}</p>
      <p><b>Address: </b>{props.user.address}</p>
      <p><small>User type: {props.user.userType}</small></p>
      <button type="button" className="btn btn-danger btn-sm" onClick={props.handleDeleteUser} id={props.user._id}>Delete</button>
      <button type="button" className="btn btn-success btn-sm ml-4" onClick={props.handleUpdateUser} id={props.user._id}>Update</button>
    </div>
  );
}

export function UpdateUser(props) {

  // let editedUser = {
  //   firstName: props.user.firstName,
  //   lastName: props.user.lastName,
  //   phoneName: props.user.phoneName,
    // firstName: props.user.firstName,
    // firstName: props.user.firstName,
    // firstName: props.user.firstName,
  // };

  // let handleInputChange = event => {
  //   const { name, value } = event.target;
  //   editedUser[name] = value;
  //     console.log(editedUser)
  // };

  // let handleUpdateClick = event => {
  //   event.preventDefault();

    // if (editedUser.firstName && editedUser.lastName && editedUser.phone && editedUser.userType) {
    //   props.handleUpdateClick(editedUser);
    // }else{
    //   console.log('nah!');
    //   // console.log(editedUser)
    // }
  // };

  return (
    <div>
      Edit mode
      <Input
        name="firstName"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        value={props.user.firstName}
      />
      <Input
        name="lastName"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.lastName}
      />
      <Input
        name="phone"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.phone}
      />
      <Input
        name="email"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.email}
      />
      <TextArea
        name="address"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        defaultValue={props.user.address}
      />
      <ListUserType
        name="userType"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        text={props.user.userType}
      />
      <FormBtn
        onClick={props.handleCancelUpdate}
        color={props.colorCancel}
      >
        Cancel
      </FormBtn>
      <FormBtn
        onClick={(e) => props.handleUpdateClick(e, props.user._id)}
        color={props.color}
      >
        Update
      </FormBtn>
    </div>
  );
}


