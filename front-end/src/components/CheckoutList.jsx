import React, { useEffect, useState } from 'react';
import { getTotalPrice } from '../utilities/Cart';

function CheckoutList() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));// pega os produtos do carrinho atualizado
    // const total = JSON.parse(localStorage.getItem('totalPrice'));// pega o novo valor
    setTotalPrice(getTotalPrice().replace('.', ','));
    setProducts(cartData);
  }, [totalPrice]);

  const handleRemove = ({ target }) => {
    const filter = products.filter((prod) => prod.id !== Number(target.id));
    const total = filter
      .reduce((acc, { price, itemQty }) => (price * itemQty) + acc, 0);
    const finalPrice = total.toFixed(2).replace('.', ',');
    setProducts(filter);
    setTotalPrice(finalPrice);
    localStorage.setItem('cartData', JSON.stringify(filter));// atualiza produtos
    localStorage.setItem('totalPrice', JSON.stringify(finalPrice));// atualiza valor
  };
  // tem que somar novamente e atualizar valor se for removido algum item

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-Total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, price, name, itemQty }, it) => (
            <tr key={ it }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${it}` }
              >
                {it + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${it}` }
              >
                {name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${it}` }
              >
                {itemQty}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${it}` }
              >
                {(price.toFixed(2).replace('.', ','))}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${it}` }
              >
                {(price * itemQty).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  onClick={ handleRemove }
                  id={ id }
                  data-testid={ `customer_checkout__element-order-table-remove-${it}` }
                  type="button"
                >
                  Remover Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${totalPrice}` }
      </span>
    </div>
  );
}

export default CheckoutList;
