import React from 'react';
import {
  LoginFieldContainer
} from './loginField.styles';

const LoginField = ({
  type, placeHolder, name, register
}) => {
  return (
    <LoginFieldContainer>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        ref={register}
      />
    </LoginFieldContainer>
  );
};

export default LoginField;
