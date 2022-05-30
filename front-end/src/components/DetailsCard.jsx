import React from 'react';
import PropTypes from 'prop-types';
import DetailsHeader from './orders/DetailsHeader';
import DetailsBody from './orders/DetailsBody';

function DetailsCard({ data, role }) {
  const { totalPrice } = data;
  // console.log('detailsCard ===> ', data);

  return (
    <div>
      <h5>Detalhe do Pedido</h5>
      <div className="card card-body bg-primary mb-3">
        <DetailsHeader data={ data } role={ role } />
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <p>Item</p>
          <p>Descrição</p>
          <p>Quantidade</p>
          <p>Valor Unitário</p>
          <p>Sub-total</p>
        </div>
        <DetailsBody data={ data } role={ role } />
        <div
          className="text-end"
          data-testid={ `${role}_order_details__element-order-total-price` }
        >
          { `R$ ${totalPrice}` }
        </div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  data: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default DetailsCard;
