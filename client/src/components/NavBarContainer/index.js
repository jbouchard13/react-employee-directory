import React from 'react';
import './style.css';

class NavBarContainer extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg nav-color'>
        <span className='navbar-brand'>Employee Directory</span>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link link' href='/'>
                Table
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link link' href='/add'>
                Add Employee
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBarContainer;
