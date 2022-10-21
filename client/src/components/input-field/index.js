import React from 'react';
import { 
  InputFieldContainer, 
  InputFieldOptions,
  InputFieldButton
} from './inputField.styles';

const InputField = ({ 
  type, placeHolder, name, register, disabled, extra, show, showHandler, save
}) => {
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
        <div onClick={() => showHandler(!show)}>
          <InputFieldButton className="cancel">
            Cancel
          </InputFieldButton>
        </div>
        <div onClick={() => {
          console.log('wow');
          save;
        }}>
          <InputFieldButton className="save">
            Save
          </InputFieldButton>
        </div>
      </InputFieldOptions>
    </InputFieldContainer>
  );
};

export default InputField;
