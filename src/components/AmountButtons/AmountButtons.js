import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Wrapper from 'components/AmountButtons/AmountButtonsWrapper';

const AmountButtons = ({ amount, increase, decrease }) => (
  <Wrapper>
    <button className="amount-button" onClick={decrease}>
      <FaMinus />
    </button>
    <div className="amount">{amount}</div>
    <button className="amount-button" onClick={increase}>
      <FaPlus />
    </button>
  </Wrapper>
);

export default AmountButtons;
