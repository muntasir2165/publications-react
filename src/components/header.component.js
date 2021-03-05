import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userName, isLoggedIn, onLogout }) => (
  <nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
    <Link className='navbar-brand' to='/'>
      <i className='fas fa-book fa-lg'></i>
      <span className='pl-2'>Publications</span>
    </Link>

    <ul class='navbar-nav'>
      <li class='nav-item'>
        <Link className='nav-link' to='/publication-listing'>
          <span className='pl-2'>Listing</span>
        </Link>
      </li>
      <li class='nav-item'>
        <Link className='nav-link' to='/publication-trend'>
          <span className='pl-2'>Trend</span>
        </Link>
      </li>
    </ul>
    {isLoggedIn && (
      <h4 className='ml-auto mr-4 my-auto'>
        <span className='badge badge-pill badge-secondary text-capitalize small'>
          Welcome {userName} !
        </span>
      </h4>
    )}
    {isLoggedIn && (
      <button
        type='button'
        onClick={onLogout}
        className='btn btn-sm btn-outline-warning'
      >
        Logout | <i className='fas fa-sign-out-alt' />
      </button>
    )}
  </nav>
);

export default Header;
