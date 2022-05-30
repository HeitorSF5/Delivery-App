import React from 'react';
import PropTypes from 'prop-types';

function ButtonSeller({ status }) {
  function changeStatus(e) {
    // deve ser usado api para alterar status do pedido no BD
    console.log(e.target.value);
    // console.log(`Status alterado para ${e.target.value}`);
  }

  return (
    <div className="container d-flex">
      <button
        type="button"
        className="btn btn-warning btn-sm"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ changeStatus }
        disabled={ status !== 'Pendente' }
        value="Preparando"
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ changeStatus }
        disabled={ status !== 'Preparando' }
        value="Em trânsito"
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

ButtonSeller.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ButtonSeller;
