import React from "react";
import "./style.css";

function ValueCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              {props.name}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  

export default ValueCard;