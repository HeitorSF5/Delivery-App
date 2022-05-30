import React from 'react';
import PropTypes from 'prop-types';
import ButtonSeller from './ButtonSeller';
import ButtonCustomer from './ButtonCustomer';

function DetailsHeader({ data, role }) {
  const {
    id,
    status,
    deliveryNumber,
    salesDate,
  } = data;
  // console.log(data);

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-details-label-order-${id}`
        }
      >
        Pedido
        {' '}
        {deliveryNumber}
      </p>
      {role === 'customer' && (
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
          className="card text-primary text-center"
        >
          Nome Vendedor
        </p>
      )}
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-details-label-order-date`
        }
      >
        { salesDate }
      </p>
      <p className="card text-primary text-center">{ status }</p>
      <div>
        {
          (role === 'customer') ? (
            <ButtonCustomer
              status={ status }
            />)
            : (
              <ButtonSeller
                status={ status }
              />)
        }
      </div>
    </div>
  );
}

DetailsHeader.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    salesDate: PropTypes.string.isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default DetailsHeader;
