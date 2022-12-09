// const express = require('express'); 
const { getCart, addItemInCart, getCartAllItems, deleteItemInCart, emptyItemsInCart, addCart, deleteCart} = require ('./../../controllers/cartControllers/cart.controller');
// const {authenticateToken} = require('../../utils/index');
module.exports = (app) => {
  // all cart endpoints goes here
  app.get('/carts/:id', getCart); // get a cart by id 
  app.get('/carts/allItem/:id', getCartAllItems); // get all items in certain cart
  app.post('/carts/addItem', addItemInCart); // add new item in cart 
  app.post('/carts/removeItem', deleteItemInCart); 
  app.post('/carts/removeAll', emptyItemsInCart); 
  app.post('/carts/addCart', addCart); 
  app.delete('/carts/delete', deleteCart); 
}; 
