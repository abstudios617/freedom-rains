const {webhook, createCheckoutSession, createSubscriptionPayment, createPaymentIntent, getInvoice} = require('../../controllers/checkoutController/checkout.controller.js');
const express = require('express');

module.exports = (app) => {
  app.get('/checkout/invoice', getInvoice); //may not be needed 
  app.post('/checkout/createSession', createCheckoutSession); //create a checkout session for onetime purchase
  app.post('/checkout/subscribe', createSubscriptionPayment); //TODO
  app.post('/checkout/pay', createPaymentIntent); //may not be needed
  app.post('/webhook', express.raw({type: 'application/json'}), webhook); //webhook to handle events from stripe
};
