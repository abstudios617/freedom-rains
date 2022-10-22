import React from 'react';
import { OrderItemStyles } from './accountOrderHistory.styles';

const OrderItem = ({
  key, number, items, shipped, shippedDate, 
  delivered, deliveryDate, returned, tracked, 
  addr, total, orderLink
}) => {
  return (
    <OrderItemStyles>
      <div onClick={() => console.log(orderLink)} key={key}>
        <div>Order number: {number}</div>
        <div>Shipped on: {shippedDate}</div>
        <div>Delivered on: {deliveryDate}</div>
        <div>
          {
            items.map((i) => {
              const {
                index, itemName, itemPrice, itemImage, itemLink
              } = i;
              return (
                <div onClick={() => console.log(itemLink)} key={index}>
                  <img src={itemImage} alt="" />
                  <div>
                    <small>{itemName} (${itemPrice})</small>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div>
          {items.length} items total: ${total}
        </div>
        {
          /* EXTRA */
          <div>
            EXTRAS: <br/>
            For address: {addr} | 
            Returned: {returned} |
            Tracked: {tracked} | 
            Shipped: {shipped} |
            Delivered: {delivered}
          </div>
        }
      </div>
    </OrderItemStyles>
  );
};

export default OrderItem;
