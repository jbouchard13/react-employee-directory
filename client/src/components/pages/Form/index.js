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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let newEmployee = this.state;
    API.addNewEmployee(newEmployee)
      .then((response) => {
        alert(response.data.message);
      })
      .catch(() => {
        alert('An error occured, please try again');
      });
  }

  render() {
    return (
      <div>
        <h3>Employee Management</h3>
        <form>
          <div className='form-group'>
            <Input
              onChange={this.handleInputChange}
              value={this.state.firstName}
              name='firstName'
              placeholder='First Name'
            />
          </div>
          <div className='form-group'>
            <Input
              onChange={this.handleInputChange}
              value={this.state.lastName}
              name='lastName'
              placeholder='Last Name'
            />
          </div>
          <div className='form-group'>
            <Input
              onChange={this.handleInputChange}
              value={this.state.jobTitle}
              name='jobTitle'
              placeholder='Job Title'
            />
          </div>
          <Button
            buttonText='Add Employee'
            handleSort={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>
      </div>
    );
  }
}

export default Form;
