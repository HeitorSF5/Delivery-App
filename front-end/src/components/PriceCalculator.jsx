import { getCart } from '../utilities/Cart';

export default function calculatePrice() {
  const myCart = getCart();
  if (myCart.length < 1) return 0;
  const calcPrice = myCart
    .map(({ price, itemQty }) => parseInt(itemQty, 10) * parseFloat(price))
    .reduce((prevVal, currVal) => prevVal + currVal);
  return calcPrice.toFixed(2);
}
