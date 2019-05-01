import React from 'react';

export default (props) => {

  return(
  <div className="form-group">
    <select className="form-control" name={props.name} {...props}>
      <option selected value="">Available Services</option>
      {props.services.map(service => (
        <option value={service._id} key={service._id}>{service.name}</option>
      ))}
    </select>
  </div>
  );
}