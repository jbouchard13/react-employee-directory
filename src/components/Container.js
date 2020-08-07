// component for bootstrap container

import React from 'react';
import Table from './Table';

class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>List of Employees</h3>
        <Table />
      </div>
    );
  }
}

export default Container;
