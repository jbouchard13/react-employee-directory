import React from 'react';
import TableBody from './TableBody';
import API from '../utils/API';

class Table extends React.Component {
  // set the state to an array that will receive employee data from db
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployeeInfo().then((res) => {
      console.log(res);
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Job Title</th>
          </tr>
        </thead>
        <TableBody employees={this.state.employees} />
      </table>
    );
  }
}

export default Table;
