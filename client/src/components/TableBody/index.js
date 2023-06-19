import React from "react";
import TableRow from "../TableRow";

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.employees.map((employee) => (
          <TableRow
            firstName={employee.firstName}
            lastName={employee.lastName}
            jobTitle={employee.jobTitle}
            id={employee._id}
            key={employee._id}
            deleteEmployee={this.props.deleteEmployee}
          />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
