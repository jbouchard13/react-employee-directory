// component for bootstrap container

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Table from '../pages/Table';
import Form from '../pages/Form';
import NavBarContainer from '../NavBarContainer';

class Container extends React.Component {
  render() {
    return (
      <Router>
        <NavBarContainer />
        <div className='container'>
          <Route exact path='/' component={Table} />
          <Route exact path='/employee-management' component={Form} />
        </div>
      </Router>
    );
  }
}

export default Container;
