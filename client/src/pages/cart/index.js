import React from 'react';
import {
  CartContainer,
  CartPageContainer,
  Header,
  CartOptions,
} from './cart.styles';
import { Container } from '../../styles/global.style';

const Cart = () => {

  return (
    <Container>
      <CartPageContainer>
        <CartContainer>
          <Header>Your Cart<span>(5 items)</span></Header>
          <CartOptions>
            <span className="first">Remove all items</span>
            <span>Save all for later</span>
            <span>Go to save for later list &gt;</span>
          </CartOptions>
        </CartContainer>
      </CartPageContainer>
    </Container>
  );
};

export default Cart;
