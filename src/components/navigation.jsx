import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation-container'>
        <Link className='logo-container' to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
