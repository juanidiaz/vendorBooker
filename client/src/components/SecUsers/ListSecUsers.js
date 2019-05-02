import React from 'react';
// import API from "../../utils/API.js";
// import { renderDateCell } from '@fullcalendar/core';
// import Button from "../Button";


export default (props) => {

  // console.log(props)
  // console.log(props.services);

  return(
  <div className="form-group">
    <select className="form-control" name={props.name} {...props}>
      <option selected value="">Your pets</option>
      {props.pets.map(pet => (
        <option value={pet._id} key={pet._id}>{pet.petName}</option>
      ))}
    </select>
  </div>
  );
}