import React from 'react';
import PropTypes from 'prop-types';

function Address({ data }) {
  const { id, deliveryAddress } = data;
  return (
    <div>
      <p
        className="card text-primary text-center"
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        {deliveryAddress}
      </p>
    </div>
  );
}

Address.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default Address;
