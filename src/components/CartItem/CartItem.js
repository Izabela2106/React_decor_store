import React from 'react';
import AmountButtons from 'components/AmountButtons/AmountButtons';
import Wrapper from 'components/CartItem/CartItemWrapper';
import { useCartContext } from 'contexts/CartContext/cart_context';

const CartItem = ({ name, id, price, amount, image, color }) => {
  const { removeFromCart, toggleItem } = useCartContext();

  const increase = () => {
    toggleItem(id, 'inc');
  };
  const decrease = () => {
    toggleItem(id, 'dec');
  };

  return (
    <Wrapper>
      <div className="item">
        <img src={image} alt="img" />
        <div className="container">
          <h5>{name}</h5>
          <div className="color" style={{ background: color }} />
        </div>
      </div>
      <h5 className="price">${price.raw.toFixed(2)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <h5 className="subtotal">${(price.raw * amount).toFixed(2)}</h5>
      <button className="btn" onClick={() => removeFromCart(id)}>
        remove
      </button>
    </Wrapper>
  );
};

export default CartItem;
