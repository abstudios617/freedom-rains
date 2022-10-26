import React from 'react';
import { InputFieldContainer } from './inputField.styles';

const InputField = ({ type, placeHolder, name, register, disabled }) => {
  return (
    <InputFieldContainer>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        ref={register}
        disabled={disabled || false}
      />
    </InputFieldContainer>
  );
};

export default InputField;
