import React from 'react';
import TableBody from './TableBody';

class Table extends React.Component {
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
        <TableBody />
      </table>
    );
  }
}

export default Table;
