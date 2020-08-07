import React from 'react';

function Button(props) {
  return (
    <button className='btn btn-info' onClick={props.handleSort}>
      {props.buttonText}
    </button>
  );
}

export default Button;
