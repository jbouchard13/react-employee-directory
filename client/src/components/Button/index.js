import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button
      className="btn button-color btn-sm button"
      onClick={props.handleSort}
      id={props.id}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
