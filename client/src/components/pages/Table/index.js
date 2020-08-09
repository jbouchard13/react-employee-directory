import React from 'react';
import TableBody from '../../TableBody';
import API from '../../../utils/API';
import Button from '../../Button';
import './style.css';

class Table extends React.Component {
  // set the state to an array that will receive employee data from db
  state = {
    employees: [],
    sortedEmployees: [],
    sortOrder: 'ascending',
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

  sortByFirstName() {
    // sort in ascending or descending order depending on the setOrder state
    if (this.state.sortOrder === 'ascending') {
      // uses array.sort method to compare state object properties
      let ascendingFirstNameSorted = this.state.employees.sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );
      // set the state to the new first name sorted array
      this.setState({
        employees: ascendingFirstNameSorted,
        sortOrder: 'descending',
      });
    } else if (this.state.sortOrder === 'descending') {
      // uses array.sort method to compare state object properties
      let descendingFirstNameSorted = this.state.employees.sort((a, b) =>
        a.firstName < b.firstName ? 1 : -1
      );
      this.setState({
        employees: descendingFirstNameSorted,
        sortOrder: 'ascending',
      });
    }
  }

  sortByLastName() {
    if (this.state.sortOrder === 'ascending') {
      let ascendingLastNameSorted = this.state.employees.sort((a, b) =>
        a.lastName > b.lastName ? 1 : -1
      );
      this.setState({
        employees: ascendingLastNameSorted,
        sortOrder: 'descending',
      });
    } else if (this.state.sortOrder === 'descending') {
      let descendingLastNameSorted = this.state.employees.sort((a, b) =>
        a.lastName < b.lastName ? 1 : -1
      );
      this.setState({
        employees: descendingLastNameSorted,
        sortOrder: 'ascending',
      });
    }
  }

  sortByJob() {
    if (this.state.sortOrder === 'ascending') {
      let ascendingJobTitleSorted = this.state.employees.sort((a, b) =>
        a.jobTitle > b.jobTitle ? 1 : -1
      );
      this.setState({
        employees: ascendingJobTitleSorted,
        sortOrder: 'descending',
      });
    } else if (this.state.sortOrder === 'descending') {
      let descendingJobTitleSorted = this.state.employees.sort((a, b) =>
        a.jobTitle < b.jobTitle ? 1 : -1
      );
      this.setState({
        employees: descendingJobTitleSorted,
        sortOrder: 'ascending',
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Employees</h3>
        <Button
          buttonText='Sort'
          handleSort={() => {
            this.sortByFirstName();
          }}
        />
        <Button
          buttonText='Sort'
          handleSort={() => {
            this.sortByLastName();
          }}
        />
        <Button
          buttonText='Sort'
          handleSort={() => {
            this.sortByJob();
          }}
        />
        <table className='table table-dark table-striped table-bordered employees'>
          <thead>
            <tr>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Job Title</th>
            </tr>
          </thead>
          <TableBody employees={this.state.employees} />
        </table>
      </div>
    );
  }
}

export default Table;
