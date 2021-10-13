import React from 'react';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from 'components';
import Wrapper from 'pages/CartPage/CartPageWrapper';
import { useCartContext } from 'contexts/CartContext/cart_context';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length <= 0) {
    return (
      <Wrapper>
        <div className="cont">
          <h2>Your cart is empty </h2>
          <Link to="/products" className="btn">
            Go shopping
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PageHero title="cart" />
      <CartContent />
    </Wrapper>
  );
};

export default CartPage;
