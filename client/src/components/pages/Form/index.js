import React from 'react';
import Input from '../../Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div className='form-group'>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Job Title' />
        </div>
      </form>
    );
  }
}

export default Form;
