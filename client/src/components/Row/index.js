import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} justify-content-md-center`} {...props} />;
}

export default Row;