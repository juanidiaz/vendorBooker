import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-${props.color} ml-3 mb-5`} {...props} />
  );
}

export default Button;