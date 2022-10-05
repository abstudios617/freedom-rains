import React from 'react';
import { 
  AccountCommFieldStyles,
  AccountCommFieldChildren
} from './accountCommField.styles';

const AccountCommField = ({ title, name, onClick, show, children }) => {
  return (
    <AccountCommFieldStyles>
      <div 
        className="title"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <span>{title}</span>
        <input
          type="button"
          name={name}
          onClick={onClick} 
        />
      </div>
      <AccountCommFieldChildren show={show}>
        {children}
      </AccountCommFieldChildren>
    </AccountCommFieldStyles>
  );
};

export default AccountCommField;
