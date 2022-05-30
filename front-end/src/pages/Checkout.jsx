import React from 'react';
import CheckoutList from '../components/CheckoutList';
import CheckoutDelivery from '../components/CheckoutDelivery';
import NavBar from '../components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar pageName="Checkout" />
      <CheckoutList />
      <CheckoutDelivery />

    </div>
  );
}

export default Checkout;
