import React from 'react';
import { AccountInfoSpecialStyles } from './accountInfoSpecial.styles';

const AccountInfoSpecial = ({ icon, detail }) => {
  return (
    <AccountInfoSpecialStyles>
      <img src={icon} alt="" />
      <span>
        {detail}
      </span>
      <div>
        {'>'}
      </div>
    </AccountInfoSpecialStyles>
  );
};

export default AccountInfoSpecial;
