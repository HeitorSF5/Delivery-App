import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CheckoutDelivery() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(1);
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [token, setToken] = useState('');
  const [sale, setSale] = useState(
    {
      userId: 1,
      sellerId: 1,
      totalPrice: 1,
      deliveryAddress: '',
      deliveryNumber: '',
      cart: [],
    },
  );

  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cartData')));// vem id, produto e price
    setUserId(JSON.parse(localStorage.getItem('user')).id);
    setTotalPrice((JSON.parse(localStorage.getItem('totalPrice'))));
    setToken(JSON.parse(localStorage.getItem('user')).token);
  }, []);

  useEffect(() => {
    setSale(
      {
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        cart,
      },
    );
  }, [userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart]);

  async function getSellers() {
    const sellers = await api.get('users/seller');
    console.log(sellers);
    setSellerList(sellers.data);
    setSellerId(sellers.data[0].id);
  }

  useEffect(() => {
    getSellers();
  }, []);

  const sendOrder = () => {
    // console.log(sale);
    api.post('sale', sale, { headers: { Authorization: token } })
      .then((response) => {
        console.log(response);
        navigate(`/customer/orders/${response.data}`);
      });
  };

  const handleSeller = ({ target }) => {
    setSellerId(target.value);
  };

  const handleNumber = ({ target }) => {
    setDeliveryNumber(target.value);
  };

  const handleAddress = ({ target }) => {
    setDeliveryAddress(target.value);
  };

  return (
    <div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          P. Vendedor Responsável
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
            value={ sellerId }
            onChange={ handleSeller }

          >
            {sellerList.map(({ name, id }) => (
              <option key={ id } value={ id }>{ name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            placeholder="Rua xxx"
            type="text"
            name="endereco"
            id="endereco"
            value={ deliveryAddress }
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            placeholder="123"
            type="text"
            name="numero"
            id="numero"
            value={ deliveryNumber }
            onChange={ handleNumber }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ sendOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default CheckoutDelivery;
