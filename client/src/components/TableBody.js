import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        <TableRow firstName='First' lastName='Last' jobTitle='Job' />
        {this.props.employees.map((employee) => (
          <TableRow
            firstName={employee.firstName}
            lastName={employee.lastName}
            jobTitle={employee.jobTitle}
          />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
