import React from 'react';
import API from "../../utils/API.js";
import { renderDateCell } from '@fullcalendar/core';
import Button from "../Button";


export default (props) => {
        {props.services.map(service => (
          <div className="form-group">
          <select className="form-control" name={props.name} {...props}>
            <option selected value="">{props.text}</option>
            <option value={service.name}>{service.name}</option>
            </select>
            </div>
        ))}
}