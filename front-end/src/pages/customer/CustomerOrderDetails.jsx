import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import DetailsCard from '../../components/DetailsCard';
import dataMocked from '../../data/dataMocked';

function CustomerOrderDetails() {
  // api get saledetails/:id(do produto)
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder] = useState(dataMocked.find((item) => item.id === orderId));
  const [role] = useState('customer');

  // async function getDataOrder() {
  //   setDataOrder(dataMocked);
  // }

  // useEffect(() => {
  //   getDataOrder();
  // }, []);

  return (
    <div>
      <NavBar pageName="Pedidos" />
      <DetailsCard role={ role } data={ dataOrder } />
    </div>
  );
}

export default CustomerOrderDetails;
