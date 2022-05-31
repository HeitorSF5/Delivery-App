import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import DetailsCard from '../../components/DetailsCard';
import dataMocked from '../../data/dataMocked';

function CustomerOrderDetails() {
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder] = useState(dataMocked.find((item) => item.id === orderId));
  const [role] = useState('customer');

  return (
    <div>
      <NavBar pageName="My Orders" />
      <DetailsCard role={ role } data={ dataOrder } />
    </div>
  );
}

export default CustomerOrderDetails;
