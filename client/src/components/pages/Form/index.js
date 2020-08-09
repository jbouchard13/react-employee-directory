import React from 'react';
import Input from '../../Input';
import Button from '../../Button';
import API from '../../../utils/API';

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    jobTitle: '',
  };

  handleSubmit(event) {
    event.preventDefault();
    alert('working');
  }

  render() {
    return (
      <div>
        <h3>Employee Management</h3>
        <form>
          <div className='form-group'>
            <Input name='firstName' placeholder='First Name' />
          </div>
          <div className='form-group'>
            <Input name='lastName' placeholder='Last Name' />
          </div>
          <div className='form-group'>
            <Input name='jobTitle' placeholder='Job Title' />
          </div>
          <Button buttonText='Add Employee' handleSort={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Form;
