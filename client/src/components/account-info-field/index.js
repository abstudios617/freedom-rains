import React from 'react';
import { 
  OuterFlexible, 
  InnerFlexible,
  AccountInfoSpecialStyles
} from './accountInfoField.styles';

export const AccountInfoField = ({ detail, text, name, onClick }) => {
  return (
    <OuterFlexible>
      <InnerFlexible>
        <small>{detail}</small>
        <span>{text}</span>
      </InnerFlexible>
      <input 
        type="button" 
        name={name}
        value="Edit"
        onClick={onClick}
      />
    </OuterFlexible>
  );
};

export const AccountInfoSpecial = ({ icon, detail }) => {
  return (
    <AccountInfoSpecialStyles>
      <img src={icon} alt="" />
      <span>
        {detail}
      </span>
      <div>{'>'}</div>
    </AccountInfoSpecialStyles>
  );
};
