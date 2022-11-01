import React from 'react';
import { MinusButton, PlusButton, QuantityContainer, Number, QuantityTitle } from './quantityField.styles';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';

const Quantity = ({quantity, setQuantity}) => { 

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <QuantityTitle>Quantity</QuantityTitle>
      <QuantityContainer>
        <MinusButton onClick={subtract} >
          <img src={minus} alt="minus" />
        </MinusButton>
        <Number>{quantity}</Number>
        <PlusButton onClick={add}>
          <img src={plus} alt="plus" />
        </PlusButton>
      </QuantityContainer>
    </>
  );
};

export default Quantity;
