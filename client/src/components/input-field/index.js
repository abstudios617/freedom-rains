import React from 'react';
import { InputFieldContainer, ExtraStyle } from './inputField.styles';

const InputField = ({ type, placeHolder, name, register, disabled, extra }) => {
  return (
    <InputFieldContainer>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        ref={register}
        disabled={disabled || false}
      />
      <ExtraStyle>
        <span>
          {extra}
        </span>
      </ExtraStyle>
    </InputFieldContainer>
  );
};

export default InputField;
