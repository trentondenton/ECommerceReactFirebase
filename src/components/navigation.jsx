import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../store/cart/cartSelector';
import { selectCurrentUser } from '../store/user/userSelector';
import { signOutUser } from '../utils/firebaseUtil';

import { ReactComponent as Logo } from '../assets/logo.svg';
import CartIcon from './cart/cartIcon';
import CartDropdown from './cart/cartDropdown';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useSelector(selectCartItems);

  return (
    <Fragment>
      <div className='navigation-container'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
