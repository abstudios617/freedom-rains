const knex = require('../../utils/knex').instance();
// const stripeConnect = require('stripe')(stripe);


// CREATE

// create a new cart and insert it in the db
module.exports.addCart = async (req, res) => {
  knex('carts')
    .insert(
      {
        items: JSON.stringify(req.body.items)
      },
      ['cart_id', 'items']
    )
    .then((cart) => res.status(200).json(cart[0]))
    .catch((err) => res.status(500).json(err));
}


// GET

// Get a cart by ID
module.exports.getCart = async (req, res) => {
  knex('carts')
    .where({ cart_id: req.params.id })
    .then((cart) => res.status(200).json(cart[0])) 
    .catch((err) => res.status(500).json(err)); 
};


// Get all items in the cart by ID as a array
module.exports.getCartAllItems = async (req, res) => {
  knex('carts')
    .where({ cart_id: req.params.id })
    .then((cart) => res.status(200).json(cart[0].items)) 
    .catch((err) => res.status(500).json(err)); 
}

// UPDATE

// add item in cart 
// ex of req obj: (axios call from front-end)
// {
//   "cart_id": 1,
//   "item": {
//     "id": "price_1LSOxMFiSX0kathO35npm8yT",
//     "quantity": "3"
//   }
// }
module.exports.addItemInCart = async (req, res) => {
  const addItem = (list, item) => {
    list.push(item); 
    return list; 
  };

  // retrieve the given id cart's items 
  const items = async () => {
    return knex('carts')
      .where({ cart_id: req.body.cart_id })
      .then((cart) => {
        return cart[0].items;
      })
      .catch((err) => {
        res.status(500).json(err)
      });
  }

  knex('carts')
    .where({ cart_id: req.body.cart_id })
    .update(
      {
        items: JSON.stringify(addItem(await items(), req.body.item))
      }
    )
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json(err));
};

// delete an item from cart
// ex of req obj: same as addItemInCart
module.exports.deleteItemInCart = async (req, res) => {
  const deleteItem = (cartList, item) => {
    const prices = cartList.map(item => item.id); 
    const removeIndex = prices.indexOf(item.id); 
    if (removeIndex !== -1) cartList.splice(removeIndex,1); 
    return cartList; 
  };

  // retrieve the given id cart's items 
  const items = async () => {
    return knex('carts')
      .where({ cart_id: req.body.cart_id })
      .then((cart) => {
        return cart[0].items;
      })
      .catch((err) => {
        res.status(500).json(err)
      });
  }

  knex('carts')
    .where({ cart_id: req.body.cart_id })
    .update(
      {
        items: JSON.stringify(deleteItem(await items(), req.body.item))
      }
    )
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json(err)); 
};

// Empty items in cart 
// ex of req obj: 
// {
//   "id": "1"
// }
module.exports.emptyItemsInCart = async (req, res) => {

  knex('carts')
    .where({ cart_id: req.body.cart_id })
    .update(
      {
        items: JSON.stringify([])
      }
    )
    .then((cart) => res.status(200).json(cart)) // cart should be []
    .catch((err) => res.status(500).json(err)); 
};

// DELETE

// Delete a cart
module.exports.deleteCart = async (req, res) => {
  knex('carts')
    .where({ cart_id: req.body.cart_id })
    .del()
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json(err));
}
