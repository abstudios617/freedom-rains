import React from 'react';
import { 
  InputFieldContainer, 
  InputFieldOptions,
  InputFieldButton
} from './inputField.styles';

const InputField = ({ type, placeHolder, name, register, disabled, extra, show }) => {
  return (
    <InputFieldContainer show={show}>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        ref={register}
        disabled={disabled || false}
      />
      <div>
        {extra}
      </div>
      <InputFieldOptions>
        <InputFieldButton className="cancel">
          Cancel
        </InputFieldButton>
        <InputFieldButton className="save">
          Save
        </InputFieldButton>
      </InputFieldOptions>
    </InputFieldContainer>
  );
};

export default InputField;
