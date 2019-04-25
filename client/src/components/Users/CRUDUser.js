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
};

export function UpdateUser(props) {

  let validateBeforeUpdate = (e) => {
    if (!props.user.firstName || !props.user.lastName || !props.user.phone || !props.user.email) { return } 
    props.handleUpdateClick(e, props.user._id)
  };

  return (
    <div>
      Edit mode
      <ListUserType
        name="userType"
        onChange={(e) => props.handleValueUpdate(e, props.user._id)}
        text={props.user.userType}
      />
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
