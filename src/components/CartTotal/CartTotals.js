import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/CartTotal/CardTotalsWrapper';
import { useCartContext } from 'contexts/CartContext/cart_context';
import { useUserContext } from 'contexts/user_context';

const CartTotals = () => {
  const { total_price, total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <article>
        <p>total amount: {total_amount}</p>

        <p>total price: ${total_price}</p>
        <p>shipping fee: ${shipping_fee}</p>
        <hr />
        <p>total: ${total_price + shipping_fee}</p>
        {myUser ? (
          <Link to="/checkout" className="btn">
            proceed to checkout{' '}
          </Link>
        ) : (
          <button type="button" onClick={loginWithRedirect} className="btn">
            login
          </button>
        )}
      </article>
    </Wrapper>
  );
};

export default CartTotals;
