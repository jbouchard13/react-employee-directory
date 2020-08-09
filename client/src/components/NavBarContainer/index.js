import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function NavBarContainer() {
  const location = useLocation();
  return (
    <nav className='navbar navbar-expand nav-color'>
      <span className='navbar-brand'>Employee Directory</span>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              to='/'
              className={
                location.pathname === '/'
                  ? 'nav-link link-active'
                  : 'nav-link link'
              }
            >
              Table
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/employee-management'
              className={
                location.pathname === '/employee-management'
                  ? 'nav-link link-active'
                  : 'nav-link link'
              }
            >
              Employee Management
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarContainer;
