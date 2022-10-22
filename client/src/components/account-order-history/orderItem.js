import React, { useState } from 'react';
import { OrderItemStyles, OrderMoreInfo } from './accountOrderHistory.styles';

const OrderItem = ({
  key, number, items, shipped, shippedDate,
  delivered, deliveryDate, returned, tracked,
  addr, total, orderLink
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const RANDOM = Math.round(Math.random());
  /* random for now, although it changes every time I click for view details */

  return (
    <>
      <OrderItemStyles>
        <div className="orderMain" onClick={() => console.log(orderLink)} key={key}>
          <div className="orderNumber">#{number}</div>
          <div className="orderDelivery">
            <div>
              Shipped on: {shippedDate}
            </div>
            <div>
              Delivered on: {deliveryDate[RANDOM]}
            </div>
          </div>
          <div className="orderItemsPreview">
            {
              items.map((i) => {
                const {
                  index, itemName, itemPrice, itemImage, itemLink
                } = i;
                return (
                  <div className="orderItemObject" key={index}>
                    <img 
                      className="orderItemObjectImg" 
                      src={itemImage} alt="" 
                      onClick={() => window.alert(`Redirecting to link ${itemLink} for item ${itemName}.`)}
                    />
                    {/* only show each item name and item price on order details & when hovering */}
                    <div className="orderItemObjectText">
                      <small>{itemName} (${itemPrice})</small>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="orderItemBottom">
            <div className="itemTotalPrice">
              {items.length} items total: <b>${total}</b>
            </div>
            <div className="objectItemOptions">
              <input
                type="button"
                value="View Details"
                onClick={() => setShowDetails(true)}
              />
              <input
                type="button"
                value="Start a Return"
                onClick={() => window.alert('TEST: order is set to return')}
              />
              <input
                type="button"
                value="Track Order"
                onClick={() => window.alert('TEST: order to be tracked')}
              />
            </div>
          </div>
        </div>
        {
          /* EXTRA */
          <div className="extras">
            EXTRAS: <br />
            For address: {addr} |
            Returned: {returned} |
            Tracked: {tracked} |
            Shipped: {shipped} |
            Delivered: {delivered}
          </div>
        }
      </OrderItemStyles>
      {
        /* More details can be added later */
        showDetails &&
        <OrderMoreInfo>
          <div className="orderDetailMain">
            HELLO WORLD
          </div>
          <input 
            className="cancelDetails"
            type="button"
            value="Cancel"
            onClick={() => setShowDetails(false)}
          />
        </OrderMoreInfo>
      }
    </>
  );
};

export default OrderItem;
