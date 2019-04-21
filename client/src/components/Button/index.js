import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-${props.color}`} {...props} />
  );
}

export default Button;