import React from 'react';
import Wrapper from 'components/CartCollumns/CartColumnsWrapper';

const CartColumns = () => (
  <Wrapper>
    <div className="titles">
      <h5>item</h5>
      <h5>price</h5>
      <h5>quantity</h5>
      <h5>subtotal</h5>
      <h5 />
    </div>
  </Wrapper>
);

export default CartColumns;
