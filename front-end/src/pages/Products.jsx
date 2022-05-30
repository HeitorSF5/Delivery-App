import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/pages/products.css';
// import { getCart, saveTotalPrice } from '../components/Cart';
import moneyToString from '../utilities/moneyStringConvert';
import getUserData from '../components/LocalUserData';
import calculatePrice from '../utilities/calculatePrice';
import Loading from '../components/Loading';

function Products() {
  const letsNavigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const defaultPrice = 0;
  const [myProds, setProds] = useState([]);
  const [finalPrice, setPrice] = useState(defaultPrice.toFixed(2));

  function handleNavigate() {
    letsNavigate('/customer/checkout');
  }

  function callTotalPrice() {
    console.log('total price from localStorage:', calculatePrice());
    setPrice(calculatePrice());
    console.log('\n \n this is useEffect price:', finalPrice);
    setLoading(false);
  }

  async function fetchProducts() {
    const { token } = getUserData();
    const response = await api
      .get('products', { headers: { Authorization: token } });
    const allProducts = response.data
      .map((prod) => (
        <ProductCard
          key={ prod.id }
          prodData={ prod }
          calcPrice={ () => callTotalPrice() }
        />
      ));
    setProds(allProducts);
    // setLoad(false);
    return allProducts;
  }

  function checkoutField() {
    return (
      <footer className="checkoutFooter">
        <button
          data-testid="customer_products__button-cart"
          type="button"
          disabled={ parseInt(finalPrice, 10) === 0 }
          onClick={ handleNavigate }
        >
          Checkout
          <h2 data-testid="customer_products__checkout-bottom-value">
            { moneyToString(finalPrice) }
          </h2>
        </button>
      </footer>
    );
    //  Aqui o link acima deve estar desabilitado caso o carrinho esteja vazio - ou seja, com o preço final 0,00
  }

  useEffect(() => {
    if (myProds.length === 0) fetchProducts();
    callTotalPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (load) return <p> LOADING </p>;
  return (
    <main>
      PRODUCTS
      <Navbar pageName="Produtos" />
      { isLoading ? <Loading /> : (
        <span className="productList">
          { myProds }
          { checkoutField() }
        </span>
      )}
    </main>
  );
}

export default Products;
