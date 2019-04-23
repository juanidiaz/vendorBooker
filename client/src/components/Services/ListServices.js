import React from 'react';
import API from "../../utils/API.js";
import { renderDateCell } from '@fullcalendar/core';
import Button from "../Button";


export default (props) => {

  console.log(props.services);

  return(
  <div className="form-group">
    <select className="form-control" name={props.name} {...props}>
      <option selected value="">Hello World</option>
      {props.services.map(service => (
        <option value={service.name}>{service.name}</option>
      ))}
    </select>
  </div>
  );
}