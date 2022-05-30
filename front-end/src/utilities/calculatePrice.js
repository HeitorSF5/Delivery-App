import { saveTotalPrice, getCart } from './Cart';

export default function calculatePrice() {
  // console.log('calculating price');
  const DEFAULT_PRICE = 0;
  const myCart = getCart();
  if (myCart.length < 1) return DEFAULT_PRICE.toFixed(2);
  const calcPrice = myCart
    .map(({ price, itemQty }) => parseInt(itemQty, 10) * parseFloat(price))
    .reduce((prevVal, currVal) => prevVal + currVal);
  saveTotalPrice(calcPrice.toFixed(2));
  return calcPrice.toFixed(2);
}
