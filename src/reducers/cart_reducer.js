import { cartActions } from 'contexts/CartContext/cartActions';

const cart_reducer = (state, action) => {
  const { CLEAR_CART, COUNT_TOTALS, REMOVE_PRODUCT, ADD_TO_CART, TOGGLE_AMOUNT } = cartActions;

  if (action.type === ADD_TO_CART) {
    const { id2: id, name, color, price, itemsNumber, media, inventory } = action.payload;

    const newCart = [...state.cart];

    const suppItem = newCart.filter((item) => item.id === id);

    if (suppItem.length > 0) {
      newCart.map((item) => {
        if (item.id === id) {
          item.amount += itemsNumber;
          if (item.amount > inventory.available) {
            item.amount = inventory.available;
          }
        }
        return item;
      });
    } else {
      const newItem = {
        id,
        name,
        color,
        price,
        amount: itemsNumber,
        image: media.source,
        inventory: inventory.available,
      };

      newCart.push(newItem);
    }

    return { ...state, cart: newCart };
  }

  if (action.type === REMOVE_PRODUCT) {
    let newCart = [...state.cart];
    newCart = newCart.filter((item) => item.id !== action.payload);

    return { ...state, cart: newCart };
  }

  if (action.type === TOGGLE_AMOUNT) {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        let newAmount;
        if (action.payload.type === 'dec') {
          newAmount = item.amount - 1;
          if (newAmount < 0) {
            newAmount = 0;
          }
          return { ...item, amount: newAmount };
        }

        newAmount = item.amount + 1;
        if (newAmount > item.inventory) {
          newAmount = item.inventory;
        }
        return { ...item, amount: newAmount };
      }

      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === COUNT_TOTALS) {
    const totalPrice = state.cart.reduce((price, item) => {
      price += item.amount * item.price.raw;
      return price;
    }, 0);
    const totalAmount = state.cart.reduce((amount, item) => {
      amount += item.amount;
      return amount;
    }, 0);
    return { ...state, total_amount: totalAmount, total_price: totalPrice };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
