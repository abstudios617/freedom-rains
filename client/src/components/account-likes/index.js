import React from 'react';
import { AccountLikesContainer } from './accountLikes.styles';

const AccountLikes = ({children}) => {
  return (
    <AccountLikesContainer>
      {children}
    </AccountLikesContainer>
  );
};

export default AccountLikes;
