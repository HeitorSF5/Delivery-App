import React from 'react';
import PropTypes from 'prop-types';
import Address from './orders/Address';

function SalesCard(props) {
  const {
    id, role, status,
    deliveryNumber, totalPrice, salesDate } = props;

  const PATH = (role === 'sales') ? '/seller/orders' : '/customer/orders';

  return (
    <a className="card card-body bg-primary mb-3" href={ `${PATH}/${id}` }>
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
      >
        {status}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-order-id-${id}` }
      >
        {deliveryNumber}
      </p>
      {
        (role === 'sales')
          ? <Address data={ props } /> : null
      }
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-card-price-${id}` }
      >
        {totalPrice}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        {salesDate}
      </p>
    </a>
  );
}

SalesCard.propTypes = {
  id: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  salesDate: PropTypes.string.isRequired,
};

export default SalesCard;
