import React from 'react';
import OrderItem from './orderItem';

const AccountOrderHistory = ({ orders }) => {
  return (
    <>
      {
        orders.map((item) => {
          const { 
            index, orderNumber, items, 
            shipped, shippedDate, delivered, 
            deliveryEarliestDate, deliveryLatestDate,
            returned, tracked, total, addr, link
          } = item;
          return (
            <OrderItem
              key={index}
              number={orderNumber}
              items={items}
              shipped={shipped}
              shippedDate={shippedDate}
              delivered={delivered}
              deliveryDate={
                [deliveryEarliestDate, deliveryLatestDate]
              }
              returned={returned}
              tracked={tracked}
              addr={addr}
              total={total}
              orderLink={link}
            />
          );
        })
      }
    </>
  );
};

export default AccountOrderHistory;
