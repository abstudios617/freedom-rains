import React from 'react';
import { 
  OuterFlexible, 
  InnerFlexible,
  AccountInfoSpecialStyles
} from './accountInfoField.styles';

/**
 * AccountInfoField
 * -> for user information text fields, able to edit
 * 
 * @param {*} param0 
 * @returns 
 */
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

/**
 * AccountInfoSpecial
 * -> component for 'Shopping preferences' and 'Account deletion'
 * 
 * @param {*} param0 
 * @returns 
 */
export const AccountInfoSpecial = ({ icon, detail, onClick }) => {
  return (
    <div onClick={onClick}>
      <AccountInfoSpecialStyles>
        <img src={icon} alt="" />
        <span>
          {detail}
        </span>
        <div>{'>'}</div>
      </AccountInfoSpecialStyles>
    </div>
  );
};
