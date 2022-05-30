import React, { useState } from 'react';
import DetailsCard from '../../components/DetailsCard';
import Navbar from '../../components/NavBar';
import dataMocked from '../../data/dataMocked';

function SalesDetails() {
  // api get saledetails/:id(do produto)
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder] = useState(dataMocked.find((item) => item.id === orderId));
  const [role] = useState('sales');

  // async function getDetailsOrder() {
  //   const findOrder = dataOrder.find(item => item.id === orderId);
  //   console.log('findOrder:', findOrder);
  //   setOrder(findOrder);
  //   // setDataOrder(data);
  // }

  // useEffect(() => {
  //   getDetailsOrder();
  // }, []);

  return (
    <div>
      <Navbar pageName="Pedidos" />
      <DetailsCard data={ dataOrder } role={ role } />
    </div>
  );
}

export default SalesDetails;
