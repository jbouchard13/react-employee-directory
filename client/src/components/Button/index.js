import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button className='btn btn-info btn-sm left' onClick={props.handleSort}>
      {props.buttonText}
    </button>
  );
}

export default Button;
