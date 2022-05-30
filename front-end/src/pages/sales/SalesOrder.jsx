import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import api from '../../services/api';
import dataMocked from '../../data/dataMocked';

function SalesOrder() {
  const [sales, setSales] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));
  const role = 'sales';

  async function getSales() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await api.get(`/sale/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const data = dataMocked;
    // data apenas para teste
    setSales((response.data.length > 0) ? response.data : data);
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      <Navbar pageName="Pedidos" />
      {
        sales.map((sale) => (
          <OrderCard
            key={ sale.deliveryNumber }
            id={ sale.id }
            sellerId={ sale.sellerId }
            role={ role }
            status={ sale.status }
            deliveryNumber={ sale.deliveryNumber }
            deliveryAddress={ sale.deliveryAddress }
            totalPrice={ sale.totalPrice }
            salesDate={ sale.salesDate }
          />
        ))
      }
    </div>
  );
}

export default SalesOrder;
