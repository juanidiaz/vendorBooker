import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-success`} {...props} />
  );
}

export default Button;