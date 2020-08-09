import React from 'react';
import TableBody from '../TableBody';
import API from '../../utils/API';
import Button from '../Button';

class Table extends React.Component {
  // set the state to an array that will receive employee data from db
  state = {
    employees: [],
    sortedEmployees: [],
    sortOrder: '',
  };
  // get employee data from backend db
  getEmployeeData() {
    API.getEmployeeInfo().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  // retrieve employee data when component mounts
  componentDidMount() {
    this.getEmployeeData();
  }

  buttonTest() {
    alert('TESTING');
  }

  sortByFirstName() {
    // set the state to be an array of employees
    // sorted alphabetically by first name
    alert('asdf');
    this.setState({ employees: [] });
  }

  sortByLastName() {
    alert('lastname');
  }

  sortByJob() {}

  render() {
    return (
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>
              <Button
                buttonText='Sort'
                handleSort={() => {
                  this.sortByFirstName();
                }}
              />
              First Name
            </th>
            <th scope='col'>
              <Button
                buttonText='Sort'
                handleSort={() => {
                  this.sortByLastName();
                }}
              />
              Last Name
            </th>
            <th scope='col'>
              <Button buttonText='Sort' handleSort={this.buttonTest} />
              Job Title
            </th>
          </tr>
        </thead>
        <TableBody employees={this.state.employees} />
      </table>
    );
  }
}

export default Table;
