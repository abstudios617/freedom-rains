import React from 'react';
import { AccountMenuContainer } from './accountMenu.styles';

const AccountMenu = ({ children }) => {
  return (
    <AccountMenuContainer>
      {children}
    </AccountMenuContainer>
  );
};

export default AccountMenu;
