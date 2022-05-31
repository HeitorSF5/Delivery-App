import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';

function CustomerOrder() {
  const [customer, setCustomer] = useState([]);
  const { role } = JSON.parse(localStorage.getItem('user'));

  async function getCustomer() {
    const response = {
      data: [],
    };

    setCustomer((response.data.length > 0) ? response.data : data);
  }

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div>
      <NavBar pageName="My Orders" />
      {
        customer.map((order) => (
          <OrderCard
            key={ order.deliveryNumber }
            id={ order.id }
            role={ role }
            status={ order.status }
            deliveryNumber={ order.deliveryNumber }
            totalPrice={ order.totalPrice }
            salesDate={ order.salesDate }
          />
        ))
      }
    </div>
  );
}

export default CustomerOrder;
