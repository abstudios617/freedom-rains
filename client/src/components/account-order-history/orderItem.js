import React, { useState } from 'react';
import { OrderItemStyles, OrderMoreInfo } from './accountOrderHistory.styles';

const OrderItem = ({
  key, number, items, shipped, shippedDate,
  delivered, deliveryDate, returned, tracked,
  addr, total, orderLink, orderDate, payment
}) => {
  /* just in case, band-aid. Order can't be both tracked and returned :-) */
  if (returned && tracked || delivered && tracked) tracked = false;
  const [showDetails, setShowDetails] = useState(false);
  const RANDOM = Math.round(Math.random());

  return (
    <>
      <OrderItemStyles>
        <div className="orderMain" onClick={() => console.log(orderLink)} key={key}>
          <div className="orderNumber">#{number}</div>
          <div className="orderDelivery">
            {
              (delivered && !tracked) ? (
                <div>Delivered on: {deliveryDate[RANDOM]}</div>
              ) : (
                <div>
                  {
                    shipped ? `Shipped on: ${shippedDate}` : `Ordered on: ${orderDate}`
                  }
                </div>
              )
            }
            {
              returned &&
              <div>Order has been retuned.</div>
            }
            {
              tracked &&
              <div>Order is currently being tracked.</div>
            }
          </div>
          <div className="orderItemsPreview">
            {
              items.map((i) => {
                const {
                  index, itemName, itemImage, itemLink
                } = i;
                return (
                  <div className="orderItemObject" key={index}>
                    <img
                      className="orderItemObjectImg"
                      src={itemImage} alt=""
                      onClick={() => window.alert(`Redirecting to link ${itemLink} for item ${itemName}.`)}
                    />
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
                onClick={() => window.alert(`TEST: order #${number} is set to return.`)}
              />
              <input
                type="button"
                value="Track Order"
                onClick={() => window.alert(`TEST: order #${number} to be tracked.`)}
              />
            </div>
          </div>
        </div>
      </OrderItemStyles>

      {
        /* More details can be added later */
        showDetails &&
        <OrderMoreInfo>
          <div className="orderDetailMain">
            <div className="orderDetailDetail">
              <div>
                <div>
                  Order Number #{number}
                </div>
                {
                  (delivered && !tracked) ? (
                    <div>Delivered on: {deliveryDate[RANDOM]}</div>
                  ) : (
                    <div>
                      {
                        shipped ? `Shipped on: ${shippedDate}` : `Ordered on: ${orderDate}`
                      }
                    </div>
                  )
                }
                {
                  returned &&
                  <div>Order has been retuned.</div>
                }
                {
                  tracked &&
                  <div>Order is currently being tracked.</div>
                }
              </div>
            </div>
            <div className="orderDetailButtons">
              <input
                type="button"
                value="Start a Return"
                onClick={() => {
                  window.alert(`TEST: order #${number} has been called for a return.`);
                  returned = true;
                }}
              />
              <input
                type="button"
                value="Track Order"
                onClick={() => window.alert(`TEST: order #${number} is now tracked.`)}
              />
              <input
                type="button"
                value="Customer Support"
                onClick={() => window.alert(`TEST: calling customer support for order #${number}`)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="orderDetailInventory">
                <span>
                  Items:
                </span>
                {
                  items.map((item) => {
                    const { index, itemName, itemPrice, itemAmount, itemImage, itemLink } = item;
                    return (
                      <div
                        key={index}
                        onClick={() => window.alert(`Redirecting to link: ${itemLink}`)}
                        className="orderDetailItem"
                      >
                        <img src={itemImage} alt="" />
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                          className="orderDetailItemOptions"
                        >
                          <span>{itemName}</span>
                          <div>Option</div>
                          <div>
                            <b>${itemPrice}</b>
                            &nbsp;&nbsp;
                            {
                              itemAmount > 1 &&
                              <u>x {itemAmount}</u>
                            }
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              <div className="orderDetailOptions">
                {
                  !delivered &&
                  <span>
                    <b>Expected delivery date:</b> <br />
                    {deliveryDate[RANDOM]}
                  </span>
                }
                <span>
                  <b>Delivery Address</b> <br />
                  {addr}
                </span>
                <span>
                  <b>Delivery Payment</b> <br />
                  {(payment !== null) ? payment : 'None'}
                </span>
              </div>
            </div>
            <div className="orderDetailPrice">
              Total price: &nbsp; ${total}
            </div>
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
