import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        type='text'
        name={this.props.name}
        className='form-control'
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
