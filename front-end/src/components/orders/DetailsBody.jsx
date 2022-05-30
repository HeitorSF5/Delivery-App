import React from 'react';
import PropTypes from 'prop-types';

function DetailsBody({ data, role }) {
  const {
    orders,
  } = data;

  return orders.map((item) => (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" key={ item.id }>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-item-number-${item.id}`
        }
      >
        {item.id}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-name-${item.id}`
        }
      >
        {item.name}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-quantity-${item.id}`
        }
      >
        {item.saleProducts.quantity}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-unit-price-${item.id}`
        }
      >
        {` R$ ${item.price}`}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-sub-total-${item.id}`
        }
      >
        {`R$ ${(item.saleProducts.quantity * item.price).toFixed(2)}`}
      </p>
    </div>
  ));
}

DetailsBody.propTypes = {
  data: PropTypes.shape({
    orders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      saleProducts: PropTypes.shape({
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default DetailsBody;
