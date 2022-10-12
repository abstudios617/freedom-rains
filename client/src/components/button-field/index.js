import React from 'react';
import { BtnField } from './buttonField.styles';

const ButtonField = ({ onClick, color, children }) => {
  return (
    <>
      <BtnField onClick={onClick} className={color}>
        {children}
      </BtnField>
    </>
  );
};

export default ButtonField;
