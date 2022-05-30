import React from 'react';
import PropTypes from 'prop-types';

function ButtonCustomer({ status }) {
  function changeStatus(e) {
    // deve ser usado api para alterar status do pedido no BD
    console.log(e.target.value);
    // console.log(`Status alterado para ${e.target.value}`);
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="customer_order_details__button-delivery-check" // tem que trocar
        onClick={ changeStatus }
        disabled={ status !== 'Em trânsito' }
        value="Entregue"
      >
        Confirmar recebimento
      </button>
    </div>
  );
}

ButtonCustomer.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ButtonCustomer;
