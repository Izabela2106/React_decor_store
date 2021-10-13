import React from 'react';
import { Link } from 'react-router-dom';
import CartColumns from 'components/CartCollumns/CartColumns';
import CartItem from 'components/CartItem/CartItem';
import CartTotals from 'components/CartTotal/CartTotals';
import Wrapper from 'components/CarContent/CartContentWrapper';
import { useCartContext } from 'contexts/CartContext/cart_context';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="buttons">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
