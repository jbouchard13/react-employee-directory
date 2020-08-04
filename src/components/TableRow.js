import React from 'react';

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.jobTitle}</td>
      </tr>
    );
  }
}

export default TableRow;
