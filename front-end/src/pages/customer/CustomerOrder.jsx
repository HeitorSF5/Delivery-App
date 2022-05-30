import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import dataMocked from '../../data/dataMocked';
// import api from '../../services/api';
// import PropTypes from 'prop-types';

function CustomerOrder() {
  const [customer, setCustomer] = useState([]);
  // const role = 'customer';
  const { role } = JSON.parse(localStorage.getItem('user'));

  async function getCustomer() {
    // const { token } = JSON.parse(localStorage.getItem('user'));
    // const response = await api.get(`/customer/${id}`, {
    //   headers: {
    //     Authorization: token,
    //   },
    // });
    const response = {
      data: [],
    };

    const data = dataMocked;
    // data apenas para teste
    setCustomer((response.data.length > 0) ? response.data : data);
  }

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div>
      <NavBar pageName="Pedidos" />
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

// CustomerOrder.propTypes = {};

export default CustomerOrder;
