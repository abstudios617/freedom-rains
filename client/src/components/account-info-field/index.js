import React from 'react';
import { OuterFlexible, InnerFlexible } from './accountInfoField.styles';

const AccountInfoField = ({ detail, text, id, name, onClick }) => {
  return (
    <OuterFlexible>
      <InnerFlexible>
        <small>{detail}</small>
        <span>{text}</span>
      </InnerFlexible>
      <input 
        type="button" 
        id={id} 
        name={name}
        value="Edit"
        onClick={onClick}
      />
    </OuterFlexible>
  );
};

export default AccountInfoField;
