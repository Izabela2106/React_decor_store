import React, { useEffect, useContext, useReducer } from 'react';
import reducer from 'reducers/cart_reducer';
import { cartActions } from 'contexts/CartContext/cartActions';

const getLocalStorage = () => {
  const cart = window.localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(window.localStorage.getItem('cart'));
  }

  return [];
};

const initialState = {
  cart: getLocalStorage(),
  total_amount: 0,
  total_price: 0,
  shipping_fee: 5.64,
};

const CartContext = React.createContext();
const { CLEAR_CART, COUNT_TOTALS, REMOVE_PRODUCT, ADD_TO_CART, TOGGLE_AMOUNT } = cartActions;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };

  const toggleItem = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: COUNT_TOTALS });
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, clearCart, addToCart, removeFromCart, toggleItem }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => useContext(CartContext);
