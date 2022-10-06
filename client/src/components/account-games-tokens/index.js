import React from 'react';
import { AccountGamesTokensContainer } from './accountGamesTokens.styles';

const AccountGamesTokens = ({children}) => {
  return (
    <AccountGamesTokensContainer>
      {children}
    </AccountGamesTokensContainer>
  );
};

export default AccountGamesTokens;
