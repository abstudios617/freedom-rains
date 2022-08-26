const { stripe, stripeWebhookSecret } = require('../../config');
const stripeConnect = require('stripe')(stripe);
const { sendEmail } = require('../../utils/mailer');

module.exports.createCheckoutSession = async (req, res) => {
  /* example req =
    "items": [
        {"id": "price_1LSOxMFiSX0kathO35npm8yT", "quantity": 3},
        {"id": "price_1LSOw6FiSX0kathOSA1GkzVF", "quantity": 1}
             ]
          */

  //retrieve each product and info needed for line items
  //has to be done here to prevent people from changing the price of items they purhcase etc
  let storeItems = [];
  for (let i = 0; i < req.body.items.length; i++){
    let priceObject = await stripeConnect.prices.retrieve(req.body.items[i].id);
    let productObject = await stripeConnect.products.retrieve(priceObject.product);
    storeItems.push({ id: priceObject.id, priceInCents: priceObject.unit_amount, name: productObject.name });
  }

  //create the checkout session with this info
  try {
    const session = await stripeConnect.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', //will need sep method for subscription
      line_items: req.body.items.map(item => {
        const currItem = storeItems.find(({ id }) => id === item.id);
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: currItem.name
            },
            unit_amount: currItem.priceInCents
          },
          quantity: item.quantity
        };
      }),
      success_url: 'http://localhost/success.html', //CHANGE when success page created <------
      cancel_url: 'http://localhost/cancel.html' //CHANGE when cancel page created <----------
    });
    res.json({url : session.url});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//TODO:
//clean up fxns that werent needed and remove them
//clean up code in general
//FOR CHECKOUT ONE TIME, CHECK THAT ITEMS ARE AVAILABLE
//test all working
//document how to test webhooks locally
module.exports.createSubscriptionPayment = async (req, res) => {
  // example req = {"id": "price_1LALCoFiSX0kathOMZQDJ7Rl"} this is the test subscription price obj id

  try {
    const session = await stripeConnect.checkout.sessions.create({
      billing_address_collection: 'auto',
      line_items: [
        {
          price: req.body.id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://localhost/success.html', //CHANGE when success page created <------
      cancel_url: 'http://localhost/cancel.html' //CHANGE when cancel page created <----------
    });
    res.json({url : session.url});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.getInvoice = (req, res) => {
  res.json({url : 'success'});
};

module.exports.createPaymentIntent = (req, res) => {
  res.json({url : 'success'});
};

module.exports.webhook = async (req, res) => {
  var event = req.body;
  //use webhook secret to verify events came from stripe
  //event MUST BE RAW HERE FOR STRIPE TO VERIFY, hence changes to index.js to get raw here
  const sig = req.headers['stripe-signature'];
  var webhookEvent;
  try {
    webhookEvent = stripeConnect.webhooks.constructEvent(event, sig, stripeWebhookSecret);
  }
  catch (err) {
    console.log(webhookEvent);
    console.log(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  //back to json and handle the event
  event = JSON.parse(event);
  switch (event.type) {

  case 'payment_intent.succeeded': { //this event has the payment intent and status if we need it
    const paymentIntentSuccess = event.data.object;
    console.log('PaymentIntent was successful!');
    console.log(paymentIntentSuccess);
    break;
  }

  case 'payment_method.attached': { //this event has the payment method
    const paymentMethod = event.data.object;
    console.log('PaymentMethod was attached to a Customer!');
    console.log(paymentMethod);
    break;
  }

  case 'payment_intent.created': {
    //this event happens when createCheckoutSession is called and the url for checkout is served
    const paymentIntentCreated = event.data.object;
    console.log('Payment intent created!');
    console.log(paymentIntentCreated);
    break;
  }

  case 'customer.created': { //this is a hook to create a db of customers if we want (or stripe also does this for us I believe)
    const customerCreated = event.data.object;
    console.log('Customer created!');
    console.log(customerCreated);
    break;
  }

  case 'checkout.session.completed': { //this event means the entire checkout session is over and successful
    //this is the ideal event to handle the conclusion of checkout
    const checkoutSessionCompleted = event.data.object;
    console.log('Checkout session completed!');
    console.log(checkoutSessionCompleted);

    var subject = 'Thank you! Your order is confirmed!';

    //retrieve the items purchased from stripe using session id
    const items = await stripeConnect.checkout.sessions.retrieve(
      checkoutSessionCompleted.id, {
        expand: ['line_items']
      });


    //extract the items from stripe response and build string
    let stringedLineItems = '';
    for(let i = 0; i < items.line_items.data.length; i++){
      let currItem = items.line_items.data[i];
      stringedLineItems += currItem.description + '\nQuantity: ' + currItem.quantity
                           + '\nPrice: $' + (currItem.amount_total/100) + '\n';
    }

    //build main email text while getting details from stripe event json
    var text = 'Name: ' + checkoutSessionCompleted.customer_details.name + '\n' +
    'Email: ' + checkoutSessionCompleted.customer_details.email + '\n' +
    'Total Amount: ' + '$' + (checkoutSessionCompleted.amount_total/100) + '\n' +
    'Amount Discounted: ' + ' ' + (checkoutSessionCompleted.total_details.amount_discount/100) + '\n' +
    'Amount Shipping: ' + ' ' + (checkoutSessionCompleted.total_details.amount_shipping/100) + '\n' +
    'Amount Tax: ' + ' ' + (checkoutSessionCompleted.total_details.amount_tax/100) + '\n' +
    'Items:' + '\n' + stringedLineItems;

    //send email from info@freedomrains to the customer email
    //definitely not pretty but has all the relevant information
    var sent = await sendEmail('info@freedomrains.com', checkoutSessionCompleted.customer_details.email, subject, text);
    if (sent)
      return res.status(200).end();
    else
      return res.status(500).end();
  }

  case 'charge.succeeded': { //this event means the charge was successful and is over
    //has nice receipt pre built... ex: https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSkZnZXVGaVNYMGthdGhPKLORmZgGMgbMEHUPTZ86LBZIL3CaFMi1fex7HWE5dH8s9P9HsJfW08Eb_HJD1XtIMl0iPZssSP-xDFwU
    //but missing other details like amount discounted, etc
    const chargeSucceeded = event.data.object;
    console.log('Charge succeeded!');
    console.log(chargeSucceeded);
    break;
  }

  //catches the rest (could be a lot, there's a lot of events stripe has)
  default: {
    console.log(`Unhandled event type ${event.type}`);
  }   
  }
  
  //let stripe know we are receiving the event successfully
  res.json({received: true});
};
