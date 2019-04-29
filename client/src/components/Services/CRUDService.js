import React from "react";
import { Input, TextArea, FormBtn, ListDuration } from "../Form";

export function ReadService(props) {
  return (
    <div>
      <p><b>Description: </b>{props.service.description}</p>
      <p><b>Duration: </b>{props.service.duration} minutes</p>
      <p><b>Normal price: </b>${props.service.price}
        {props.service.specialPrice ? (<span><b> Special price: </b>${props.service.specialPrice}</span>) : null}
        {props.service.cost ? (<span><b> Cost: </b>${props.service.cost}</span>) : null}</p>
      <p>{props.service.images ? <img src={`/images/${props.service.images}`} width="200" height="300" style={{ 'borderRadius': '8px', border: '2px solid #185586', 'boxShadow': '3px 3px 5px grey' }} alt={''} /> : null}</p>
      <p>{props.service.notes ? (<span><b>Notes: </b>${props.service.notes}</span>) : null}</p>
      <button type="button" className="btn btn-danger btn-sm" onClick={props.handleDeleteService} id={props.service._id}>Delete</button>
      <button type="button" className="btn btn-success btn-sm ml-4" onClick={props.handleUpdateService} id={props.service._id}>Update</button>
    </div>
  );
};

export function UpdateService(props) {

  let validateBeforeUpdate = (e) => {
    if (!props.service.name || !props.service.description || !props.service.price) { return } 
    props.handleUpdateClick(e, props.service._id)
  };

  return (
    <div>
      Edit mode
      <p><small>Fields marked <strong>*</strong> as required.</small></p>
      <hr />
      <small>Service name: *</small><Input
        name="name"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.name}
      />
      <small>Description: *</small><TextArea
        name="description"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.description}
      />
      <small>Duration: *</small><ListDuration
        name="duration"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.duration}
      />
      <small>Price: *</small><Input
        name="price"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.price}
      />
      <small>Special / discount price:</small><Input
        name="specialPrice"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.specialPrice}
      />
      <small>Cost:</small><Input
        name="cost"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.cost}
      />
      <small>Image (filename with extension!):</small><Input
        name="images"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.images}
      />
      <small>Notes:</small><TextArea
        name="notes"
        onChange={(e) => props.handleValueUpdate(e, props.service._id)}
        value={props.service.notes}
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
