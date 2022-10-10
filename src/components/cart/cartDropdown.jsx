import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cartContexts';

import Button from '../customs/button';
import CartItem from './cartItem';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>😓 Cart is empty.</span>
        )}
      </div>
      <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
