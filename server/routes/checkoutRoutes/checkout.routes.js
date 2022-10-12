const {webhook, createCheckoutSession, createSubscriptionPayment} = require('../../controllers/checkoutController/checkout.controller.js');
const express = require('express');

module.exports = (app) => {
  app.post('/checkout/createSession', createCheckoutSession); //create a checkout session for onetime purchase
  app.post('/checkout/subscribe', createSubscriptionPayment); //create a checkout session for a subscription
  app.post('/webhook', express.raw({type: 'application/json'}), webhook); //webhook to handle events from stripe
};
