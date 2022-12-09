import React, {useState} from 'react';
import {
  CartContainer,
  CartPageContainer,
  Header,
  CartOptions,
  ProductColumn,
  ProductImg,
  ButtonRow,
  CouponButton,
  SaveForLaterButton,
  ProductList,
  Product,
  ProductName,
  ProductDetails,
  ExtraDetails,
  Delete,
  SubtotalDiv,
  Total,
  Checkout,
  CheckoutButton,
  Price,
  Platform,
  CheckoutMobile,
  MoveToCart
} from './cart.styles';
import { Container } from '../../styles/global.style';
import image from '../../assets/about-us/LinkerdInIcon.png';
import Quantity from '../../components/quantity-field';
import deleteIcon from '../../assets/icons/delete.svg';
import { createCartCheckoutSession, getCart, getUserInfo } from '../../requests/api-request';

const Cart = async () => {

  const loggedInUser = await getUserInfo(); 

  // send endpoint request to retrieve the logged-in user's cart
  const userCart = await getCart(loggedInUser.cart_id); 

  const [quantity, setQuantity] = useState(1);

  const createCartCheckout = async () => {
    await createCartCheckoutSession(userCart)
      .then((result) => {
        window.location.href = result.url; 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <CartPageContainer>
        <CartContainer>
          <Header>Your Cart<span>(0 items)</span></Header>
          <CartOptions>
            <span className="first">Remove all items</span>
            <span>Save all for later</span>
            <span>Go to save for later list &gt;</span>
          </CartOptions>
          <ProductList>
            <Product>
              <ProductColumn>
                <ProductImg src={image} alt="product" />
                <ButtonRow>
                  <Quantity cta="cartPage" quantity={quantity} setQuantity={setQuantity}/>
                  <SaveForLaterButton className="noCoupon">SAVE FOR LATER</SaveForLaterButton>
                </ButtonRow>
              </ProductColumn>
              <ProductDetails>
                <Platform>Local</Platform>
                <ProductName>Linked In</ProductName>
                <Delete src={deleteIcon} alt="delete" />
                <ExtraDetails>
                  <li>Peach Black</li>
                  <li>3 ounce (pack of 1)</li>
                </ExtraDetails>
                <Price>$120.00</Price>
              </ProductDetails>
            </Product>
          </ProductList>
          <Header>Save For Later</Header>
          <CartOptions>
            <span className="blackFirst">Remove all items</span>
            <span className="colorBlack">Move all to cart</span>
            <span className="colorBlack">Go to your cart &gt;</span>
          </CartOptions>
          <ProductList>
            <Product>
              <ProductColumn>
                <ProductImg src={image} alt="product" />
                <ButtonRow>
                  <Quantity cta="cartPage" />
                  <MoveToCart>MOVE TO CART</MoveToCart>
                  <CouponButton>COUPON</CouponButton>
                </ButtonRow>
              </ProductColumn>
              <ProductDetails>
                <Platform>Local</Platform>
                <ProductName>Linked In</ProductName>
                <Delete src={deleteIcon} alt="delete" />
                <ExtraDetails>
                  <li>Peach Black</li>
                  <li>3 ounce (pack of 1)</li>
                </ExtraDetails>
                <Price>$12000.00</Price>
              </ProductDetails>
            </Product>
          </ProductList>
          <CheckoutMobile>
            <SubtotalDiv>
              <span>Subtotal: (not including tax or shipping)</span>
              <Total>$51000</Total>
              <CheckoutButton onClick={() => createCartCheckout()}>GO TO CHECKOUT</CheckoutButton>
            </SubtotalDiv>
          </CheckoutMobile>
        </CartContainer>
        <Checkout>
          <SubtotalDiv>
            <span>Subtotal: (not including tax or shipping)</span>
            <Total>$51000</Total>
            <CheckoutButton onClick={() => createCartCheckout()}>GO TO CHECKOUT</CheckoutButton>
          </SubtotalDiv>
        </Checkout>
      </CartPageContainer>
    </Container>
  );
};

export default Cart;
