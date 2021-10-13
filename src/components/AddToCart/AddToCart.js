import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/AddToCart/AddToCartWrapper';
import { useCartContext } from 'contexts/CartContext/cart_context';
import { AmountButtons } from 'components';

const AddToCart = ({ product }) => {
  const { variant_groups, name, inventory, price, id, media } = product;
  const { addToCart } = useCartContext();

  const [color, setColor] = useState(variant_groups[0].options[0].name);
  const [itemsNumber, setItemsNumber] = useState(1);

  const addButton = () => {
    let newValue = itemsNumber;
    newValue++;
    if (newValue > inventory.available) {
      setItemsNumber(inventory.available);
    } else {
      setItemsNumber(newValue);
    }
  };

  const minusButton = () => {
    let newValue = itemsNumber;
    newValue--;
    if (newValue < 0) {
      setItemsNumber(0);
    } else {
      setItemsNumber(newValue);
    }
  };
  const handleAddToCart = () => {
    const id2 = id + color;
    addToCart({ id2, name, color, price, itemsNumber, media, inventory });
  };

  return (
    <Wrapper>
      <div className="cart-details">
        <div className="colors">
          {variant_groups[0].options.map((item) => (
            <button
              aria-label="add_to_cart"
              className={item.name === color ? 'color active' : 'color'}
              key={item.name}
              style={{ background: item.name }}
              onClick={() => {
                setColor(item.name);
                // setName(item.name);
              }}
            />
          ))}
        </div>
        <AmountButtons amount={itemsNumber} increase={addButton} decrease={minusButton} />
      </div>
      <Link className="addToCartBtn btn" to="/cart" onClick={handleAddToCart}>
        Add to cart
      </Link>
    </Wrapper>
  );
};

export default AddToCart;
