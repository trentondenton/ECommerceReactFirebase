import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cartSelector';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cartAction';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemClickHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemClickHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemClickHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>
          <span onClick={removeItemClickHandler}>&#10094;</span>
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow'>
          <span onClick={addItemClickHandler}>&#10095;</span>
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemClickHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
