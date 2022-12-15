import React, {useState} from 'react';
import {
  CartContainer,
  CartPageContainer,
  Header,
  CartOptions,
  ProductColumn,
  ProductImg,
  ButtonRow,
  // CouponButton,
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
  // MoveToCart
} from './cart.styles';
import { Container } from '../../styles/global.style';
import image from '../../assets/about-us/LinkerdInIcon.png';
import Quantity from '../../components/quantity-field';
import deleteIcon from '../../assets/icons/delete.svg';
import { createCartCheckoutSession, getCart, getUserInfo, getProduct, deleteCartItem, deleteAllCartItem } from '../../requests/api-request';
import { formatPrice } from '../../utils';
const Cart = async () => {

  const [totalPrice, settotalPrice] = useState(0); 

  const loggedInUser = await getUserInfo(); 

  // send endpoint request to retrieve the logged-in user's cart
  const userCart = await getCart(loggedInUser.cart_id); 
  // if the user is not logged in, cannot use getUserInfo


  // send endpoint request to remove certain item from the cart
  const deleteItem = async (itemId) => {
    const itemObject = {
      cart_id: userCart.cart_id,
      item: {
        id: itemId
      }
    };
    const deleteItem = await deleteCartItem(itemObject); 

    if (deleteItem) console.log('deleted succesfully!'); 
  }; 

  // send endpoint request to delete all items in the cart
  const deleteAllItems = async () => {
    const deleteAll = await deleteAllCartItem(userCart.cart_id); 

    if (deleteAll) console.log('deleted all items in the cart succesfully!'); 
  }; 

  // send endpoint request to retrieve item's product detail
  const product = async (item) => {
    return await getProduct(item); 
  }; 

  // display list of products from the user's cart and calculate total items' price
  const productList = () => {
    let totalPrice = 0; 
    userCart.items.forEach(item => {
      const specificProduct = product(item); 
      totalPrice+=formatPrice(specificProduct.unit_amount); 
      return (
        <Product>
          <ProductColumn>
            <ProductImg src={image} alt="product" />
            <ButtonRow>
              <Quantity cta="cartPage" quantity={quantity} setQuantity={setQuantity}/>
              <SaveForLaterButton className="noCoupon">SAVE FOR LATER</SaveForLaterButton>
            </ButtonRow>
          </ProductColumn>
          <ProductDetails>
            {specificProduct.product.metadata.platform === 'local' ? (
              <Platform>Local</Platform>
            ) : (
              <Platform className="black">Black</Platform>
            )}
            <ProductName>Linked In</ProductName>
            <Delete src={deleteIcon} onClick={deleteItem(specificProduct.id)} alt="delete" />
            <ExtraDetails>
              <li>{specificProduct.product.name}</li>
              <li>3 ounce (pack of 1)</li>
            </ExtraDetails>
            <Price>${formatPrice(specificProduct.unit_amount)}</Price>
          </ProductDetails>
        </Product>
      );
    });
    settotalPrice(totalPrice); 
  }; 
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
          <Header>Your Cart<span>({userCart.items.length} items)</span></Header>
          <CartOptions>
            <span className="first">Remove all items</span>
            <span>Save all for later</span>
            <span>Go to save for later list &gt;</span>
          </CartOptions>
          <ProductList>
            {productList}
          </ProductList>
          <Header>Save For Later</Header>
          <CartOptions>
            <span className="blackFirst" onClick={deleteAllItems}>Remove all items</span> 
            <span className="colorBlack">Move all to cart</span>
            <span className="colorBlack">Go to your cart &gt;</span>
          </CartOptions>
          <CheckoutMobile>
            <SubtotalDiv>
              <span>Subtotal: (not including tax or shipping)</span>
              <Total>${totalPrice}</Total>
              <CheckoutButton onClick={createCartCheckout}>GO TO CHECKOUT</CheckoutButton>
            </SubtotalDiv>
          </CheckoutMobile>
        </CartContainer>
        <Checkout>
          <SubtotalDiv>
            <span>Subtotal: (not including tax or shipping)</span>
            <Total>${totalPrice}</Total>
            <CheckoutButton onClick={createCartCheckout}>GO TO CHECKOUT</CheckoutButton>
          </SubtotalDiv>
        </Checkout>
      </CartPageContainer>
    </Container>
  );
};

export default Cart;
