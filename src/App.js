import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'routes/routes';
import {
  About,
  Home,
  Cart,
  PrivateRoute,
  Services,
  Checkout,
  Error,
  Products,
  SingleProduct,
} from 'pages';

import { Navbar, Footer } from 'components';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={routes.home}>
            <Home />
          </Route>
          <Route exact path={routes.about}>
            <About />
          </Route>
          <Route exact path={routes.cart}>
            <Cart />
          </Route>
          <Route exact path={routes.services}>
            <Services />
          </Route>
          <PrivateRoute exact path={routes.checkout}>
            <Checkout />
          </PrivateRoute>
          <Route exact path={routes.products}>
            <Products />
          </Route>
          <Route exact path={routes.product}>
            <SingleProduct />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
