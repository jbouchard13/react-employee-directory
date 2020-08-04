import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        <TableRow firstName='First' lastName='Last' jobTitle='Job' />
      </tbody>
    );
  }
}

export default TableBody;
