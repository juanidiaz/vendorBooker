import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function InputMoney(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="number" min="0.01" step="0.01" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function ListDuration(props) {
  return (
    <div className="form-group">
      <select className="form-control" name={props.name} {...props}>
        <option defaultValue="">{props.text}</option>
        <option value="30">30 mins</option>
        <option value="45">45 mins</option>
        <option value="60">1 hr</option>
        <option value="90">1.5 hrs</option>
        <option value="120">2 hrs</option>
      </select>
    </div>
  );
}

export function ListUserType(props) {
  return (
    <div className="form-group">
      <select className="form-control" name={props.name} {...props}>
        <option defaultValue="">{props.text}</option>
        {/* <option value="null" disabled>Select user type</option> */}
        <option value="user">Client</option>
        <option value="vendor">Admin</option>
        <option value="staff">Staff</option>
      </select>
    </div>
  );
}

export function ListSecUserType(props) {
  return (
    <div className="form-group">
      <select className="form-control" name={props.name} {...props}>
        <option defaultValue="">{props.text}</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
      </select>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className={`btn btn-${props.color} ml-3 mb-5`}>
      {props.children}
    </button>
  );
}
