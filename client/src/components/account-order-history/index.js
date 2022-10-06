import React from 'react';
import { AccountOrderHistoryContainer } from './accountOrderHistory.styles';

const AccountOrderHistory = ({ children }) => {
  return (
    <AccountOrderHistoryContainer>
      {children}
    </AccountOrderHistoryContainer>
  );
};

export default AccountOrderHistory;
