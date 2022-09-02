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
  //create the checkout session with this info
  try {
    const session = await stripeConnect.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item => {
        return {
          price: item.id,
          quantity: item.quantity
        };
      }),
      success_url: 'http://localhost/success.html', //CHANGE when success page created <------
      cancel_url: 'http://localhost/cancel.html' //CHANGE when cancel page created <----------
    });
    // return res.redirect(303, session.url);
    return res.status(200).json({url: session.url});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

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
    return res.redirect(303, session.url);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.webhook = async (req, res) => {
  //using and testing webhooks
  //for live mode, webhook must be setup through stripe dashboard online 
  //and pointed to /webhook of the live server
  //for testing:
  //use stripe CLI
  //from terminal in same directory as stripe.exe
  //run stripe login --interactive
  //then input the api key
  //then run stripe listen --forward-to localhost:3000/webhook
  //then you can make test requests like using the checkout 
  //and stripe will redirect the request to localhost webhook
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

  case 'checkout.session.completed': { //this event means the entire checkout session is over and successful
    //this is the ideal event to handle the conclusion of checkout
    const checkoutSessionCompleted = event.data.object;
    console.log('Handling event checkout session completed');

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

  //catches the rest (could be a lot, there's a lot of events stripe has)
  default: {
    console.log(`Unhandled event type ${event.type}`);
  }   
  }
  
  //let stripe know we are receiving the event successfully
  res.status(200).json({received: true});
};
