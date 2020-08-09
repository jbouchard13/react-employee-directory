// component for bootstrap container

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Table from '../pages/Table';
import Form from '../pages/Form';

class Container extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h3>List of Employees</h3>
          <Route exact path='/' component={Table} />
          <Route exact path='/add' component={Form} />
        </div>
      </Router>
    );
  }
}

export default Container;
