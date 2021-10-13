// {"cart":[{"id":"recZkNf2kwmdBcqd0#ff0000","name":"accent chair","color":"#ff0000","amount":2,"image":"https://dl.airtable.com/.attachments/ebb5ac101474bf42ce7b7b6e951a771f/2b6c65d2/product-4.jpeg","price":25999,"max":3}],"shipping_fee":534,"total_amount":51998}

// {"cart":[{"id":"prod_ZM8X5nPkgrwpv4#0077b6","name":"big ceramic pot","color":"#0077b6","price":{"raw":99,"formatted":"99.00","formatted_with_symbol":"$99.00","formatted_with_code":"99.00 USD"},"amount":2,"image":"https://cdn.chec.io/merchants/30383/assets/jI4yWIq0x4opmH9T|oriento-NO4e9-oru8Q-unsplash.jpg","inventory":4}],"shipping_fee":564,"total_price":198}

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Wrapper from 'components/StripeCheckout/StripeCheckOutWrapper';

import { CardElement, useStripe, Elements, useElements } from '@stripe/react-stripe-js';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useCartContext } from 'contexts/CartContext/cart_context';
import { useUserContext } from 'contexts/user_context';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_price, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const history = useHistory();

  // Stripe stuff

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientServer, setClientServer] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const data_shipping_fee = shipping_fee * 100;
  const data_total_amount = total_price * 100;

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',

        { cart, shipping_fee: data_shipping_fee, total_amount: data_total_amount },
      );
      setClientServer(data.clientServer);
    } catch (Error) {
      console.log(Error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientServer, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(false);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        history.push('/');
      }, 10000);
    }
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you </h4>
          <h4>Your payment was successful</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello,{myUser && myUser.name}</h4>
          <p>Your total is ${shipping_fee + total_price}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner" /> : 'Pay'}
          </span>
        </button>
        {error && (
          <div className="class-error" role="alert">
            {error}
          </div>
        )}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeded,see the result in your{' '}
          <a href="https://dashboard.stripe.com/test/payments">Stripe dashboard</a>
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => (
  <Wrapper>
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  </Wrapper>
);

export default StripeCheckout;
