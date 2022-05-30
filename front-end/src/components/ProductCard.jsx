import React, { useEffect, useState } from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';
import { setCart, removeItem, getCart } from '../utilities/Cart';
import moneyToString from '../utilities/moneyStringConvert';

function ProductCard({ prodData, calcPrice }) {
  const { id, name, price, urlImage } = prodData;
  const [itemQty, setItemQty] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleInputQtyChange = ({ target: { value } }) => {
    const parsedValue = parseInt(value, 10);
    if (value === '' || parsedValue === 0) {
      return setItemQty(0);
      // return calcPrice();
    }
    if (value.isNaN) return null;
    return setItemQty(parsedValue);
    // return calcPrice();
  };

  const plusOneItem = () => setItemQty(itemQty + 1);

  const minusOneItem = () => {
    if (itemQty === 0) return null;
    return setItemQty(itemQty - 1);
  };

  const checkQty = () => {
    const myCart = getCart();
    myCart.forEach((prod) => {
      if (prod.id === id) {
        setItemQty(prod.itemQty);
      }
    });
  };

  useEffect(() => {
    if (itemQty === 0 && loading) return null;
    if (itemQty === 0 && !loading) {
      removeItem(id);
      return calcPrice();
    }
    setCart({ id, name, price: parseFloat(price), itemQty });
    console.log('calculating the addition');
    return calcPrice();
  }, [calcPrice, id, itemQty, loading, name, price]);
  // it won't shut up about dependencies but you can just ignore it

  useEffect(() => {
    setLoading(false);
    checkQty();
  }, []);
  // ignore alert

  return (
    <div
      className="cardFrame"
    >
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$${moneyToString(price)}` }
      </p>

      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        className="cardImage"
      />

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ minusOneItem }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="tel"
        value={ itemQty }
        onChange={ handleInputQtyChange }
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ plusOneItem }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  prodData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
  calcPrice: PropTypes.func.isRequired,
};

export default ProductCard;

// there's too much logic in this component, I feel. gonna have to separate it into other components later
