// import React from 'react';

export const getCart = () => {
  const myCart = localStorage.getItem('cartData');
  if (!myCart) {
    localStorage.setItem('cartData', JSON.stringify([]));
    return [];
  }
  return JSON.parse(myCart);
};

export const setCart = (item) => {
  const myCart = getCart();
  if (myCart.length < 1) {
    return localStorage.setItem('cartData', JSON.stringify([item]));
  }
  const duplicateCheck = myCart.filter((product) => product.id !== item.id);
  const newCart = [...duplicateCheck, item];
  localStorage.setItem('cartData', JSON.stringify(newCart));
};

export const removeItem = (id) => {
  const myCart = getCart();
  const itemRemoved = myCart.filter((item) => item.id !== id);
  localStorage.setItem('cartData', JSON.stringify(itemRemoved));
};

export const saveTotalPrice = (totalPrice) => {
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};

export const getTotalPrice = () => JSON.parse(localStorage.getItem('totalPrice'));
// cartData from storage is an array of products. Check ProductCard to see its structure.
