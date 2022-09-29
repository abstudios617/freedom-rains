import React from 'react';
import { OuterFlexible, InnerFlexible } from './accountInfoField.styles';

const AccountInfoField = ({ detail, value, edit }) => {
  return (
    <OuterFlexible>
      <InnerFlexible>
        <small>{detail}</small>
        <span>{value}</span>
      </InnerFlexible>
      <div className="edit" onClick={edit}>
        Edit
      </div>
    </OuterFlexible>
  );
};

export default AccountInfoField;
