import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContexts';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemClickHandler = () => clearItemFromCart(cartItem);
  const addItemClickHandler = () => addItemToCart(cartItem);
  const removeItemClickHandler = () => removeItemToCart(cartItem);

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
