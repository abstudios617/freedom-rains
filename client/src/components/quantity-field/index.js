import React from 'react';
import { MinusButton, PlusButton, QuantityContainer, Number, QuantityTitle } from './quantityField.styles';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import minusBlack from '../../assets/icons/minusBlack.svg';
import plusBlack from '../../assets/icons/plusBlack.svg';

const Quantity = ({ cta, quantity, setQuantity}) => { 

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add = () => {
    setQuantity(quantity + 1);
    if(cta === 'cartPage' && quantity >= 10) {
      setQuantity(10);
    }
  };

  return (
    <>
      <QuantityTitle className={cta}>Quantity</QuantityTitle>
      <QuantityContainer className={cta}>
        <MinusButton className={cta} onClick={subtract} >
          <img src={cta === 'cartPage' ? minusBlack : minus} alt="minus" />
        </MinusButton>
        <Number className={cta}>{quantity}</Number>
        <PlusButton onClick={add}>
          <img src={cta === 'cartPage' ? plusBlack : plus} alt="plus" />
        </PlusButton>
      </QuantityContainer>
    </>
  );
};

export default Quantity;
