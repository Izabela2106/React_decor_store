import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from 'components/Navbar/NavbarWrapper';
import { useUserContext } from 'contexts/user_context';
import { useCartContext } from 'contexts/CartContext/cart_context';
import logo from 'assets/images/cell1.jpg';
import { links } from 'components/Navbar/mockDataNavbar';

const Nav = () => {
  const { total_amount, clearCart } = useCartContext();
  const { myUser, logout, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div className="nav-header">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-center">
        <div className="links">
          {links.map((item) => (
            <Link key={item.id} to={item.url} className="link">
              {item.text}
            </Link>
          ))}
          {myUser && (
            <Link className="link" to="/checkout">
              checkout
            </Link>
          )}
        </div>
      </div>
      <div className="nav-footer">
        <Link to="/cart" className="cart-btn">
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">{total_amount}</span>
          </span>
        </Link>

        {!myUser && (
          <button className="auth-btn" type="button" onClick={loginWithRedirect}>
            {' '}
            <FaUserPlus />{' '}
          </button>
        )}
        {myUser && (
          <button
            className="auth-btn"
            type="button"
            onClick={() => {
              clearCart();
              logout({ returnTo: window.location.origin });
            }}
          >
            {' '}
            <FaUserMinus />{' '}
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Nav;
