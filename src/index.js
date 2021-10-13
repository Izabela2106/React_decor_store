import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from 'contexts/user_context';
import { ProductsProvider } from 'contexts/ProductsContext/products_context';
import { CartProvider } from 'contexts/CartContext/cart_context';
import { FilterProvider } from 'contexts/FiltersContext/filter_context';
import GlobalStyles from 'theme/GlobalStyles';

import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GlobalStyles />
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
