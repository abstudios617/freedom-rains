import React, { useState } from "react";
import { Container } from "../../styles/global.style";
import {
  Main,
  UserInfo,
  InfoSection,
  Icon,
  InfoHeader,
  Email,
  NotificationCheckBox,
  SaveButton,
  Login,
  ContactBar,
  EditButton,
  InputRow,
  FirstInput,
  LastInput,
  AddressLine,
  ShippingDiv,
  ShippingContainer,
  ShippingCheckbox,
  ShippingPrice,
  OrderSummary,
  OrderInfo,
  OrderTotal,
  PurchaseButton,
  PaymentDiv,
} from "./checkout.styles";
import { targetPage } from '../../utils/index';
import mail from "../../assets/icons/mail.svg";
import edit from "../../assets/icons/edit.svg";
import addressImg from "../../assets/icons/address.svg";
import shipping from "../../assets/icons/shipping.svg";
import payment from "../../assets/icons/payment.svg";
import cart from "../../assets/icons/checkoutCart.svg";
import plus from "../../assets/icons/circlePlus.svg";

// contact information section should only appear
// if user is not logged in

const Checkout = () => {
  const [contactIsHidden, setContactIsHidden] = useState(true);
  const [adressIsHidden, setAddressIsHidden] = useState(true);
  const [shippingIsHidden, setShippingIsHidden] = useState(true);
  const [paymentIsHidden, setPaymentIsHidden] = useState(true);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [creditCards, setCreditCards] = useState([]);

  const ContactSection = () => {
    return (
      <ContactBar>
        <Icon src={mail} alt="mail" className="dropDown" />
        <span>{email === "" ? "Contact Information" : email}</span>
        <EditButton onClick={() => setContactIsHidden(false)} >
          <Icon src={edit} alt="edit" />
          <span>Edit</span>
        </EditButton>
      </ContactBar>
    )
  }

  const AddressSection = () => {
    return (
      <ContactBar>
        <Icon src={addressImg} alt="address" className="dropDown" />
        <span>{address === "" ? "Shipping Address" : address}</span>
        <EditButton onClick={() => setAddressIsHidden(false)} >
          <Icon src={edit} alt="edit" />
          <span>Edit</span>
        </EditButton>
      </ContactBar>
    )
  }

  const ShippingSection = () => {
    return (
      <ContactBar>
        <Icon src={shipping} alt="shipping" className="dropDown" />
        <span>Shipping Method</span>
        <EditButton onClick={() => setShippingIsHidden(false)} >
          <Icon src={edit} alt="edit" />
          <span>Edit</span>
        </EditButton>
      </ContactBar>
    )
  }

  const PaymentSection = () => {
    return (
      <ContactBar>
        <Icon src={payment} alt="payment" className="dropDown" />
        <span>Payment</span>
        <EditButton onClick={() => setPaymentIsHidden(false)} >
          <Icon src={edit} alt="edit" />
          <span>Edit</span>
        </EditButton>
      </ContactBar>
    )
  }

  return (
    <Container>
      <Main>
        <UserInfo>
          {contactIsHidden ? <ContactSection /> : 
            <InfoSection>
              <InfoHeader>
                <Icon src={mail} alt="mail" />
                <span>Contact Information</span>
              </InfoHeader>
              <Email type="text" placeholder="Email Address:" value={email} onChange={e => setEmail(e.target.value)} required />
              <NotificationCheckBox>
                <input type="checkbox" />
                <span>Yes, I would like to be notified of product updates, upgrades, and special offeringse.</span>
              </NotificationCheckBox>
              <SaveButton type="submit" value="SAVE" onClick={() => setContactIsHidden(true)}/>
              <Login onClick={() => targetPage("login")}>Already ready have an account? login &gt;</Login>
            </InfoSection>
          }
          {adressIsHidden ? <AddressSection /> :
            <InfoSection>
              <InfoHeader>
                <Icon src={addressImg} alt="address" />
                <span>Shipping Address</span>
              </InfoHeader>
              <InputRow className="topRow">
                <FirstInput type="text" placeholder="First Name:" required />
                <LastInput type="text" placeholder="Last Name:" required />
              </InputRow>
              <AddressLine type="text" placeholder="Address Line 1:" value={address} onChange={e => setAddress(e.target.value)} required />
              <AddressLine type="text" placeholder="Address Line 2:" />
              <InputRow>
                <FirstInput type="text" placeholder="City:" required />
                <LastInput type="text" placeholder="State:" required />
              </InputRow>
              <InputRow>
                <FirstInput type="text" placeholder="Zip/Postal Code:" required />
                <LastInput type="text" placeholder="Country:" required />
              </InputRow>
              <AddressLine type="text" placeholder="Phone Number:" required />
              <SaveButton type="submit" value="SAVE" onClick={
                () => {
                  setAddressIsHidden(true);
                  setAddresses([...addresses, address]);
                  console.log(addresses);
                }
              }/>
            </InfoSection>
          }
          {shippingIsHidden ? <ShippingSection /> : 
            <InfoSection>
              <InfoHeader>
                <Icon src={shipping} alt="shipping" />
                <span>Shipping Method</span>
              </InfoHeader>
              <ShippingDiv>
                <ShippingContainer>
                  <ShippingCheckbox type="radio" name="shipping" value="Expidited Shipping" />
                  <span>Expidited Shipping</span>
                  <span className="shippingDays">(2-3 Business Days*)</span>
                  <ShippingPrice>$5.00</ShippingPrice>
                </ShippingContainer>
                {addresses.map((i) => {
                  <ShippingContainer index={i}>
                    <ShippingCheckbox type="radio" name="shipping" value="Expidited Shipping" />
                    <span>Expidited Shipping</span>
                    <span className="shippingDays">(2-3 Business Days*)</span>
                    <ShippingPrice>$5.00</ShippingPrice>
                  </ShippingContainer>
                })}
              </ShippingDiv>
              <SaveButton type="submit" value="CONFIRM" onClick={() => setShippingIsHidden(true)}/>
            </InfoSection>
          }
          {paymentIsHidden ? <PaymentSection /> :
            <InfoSection>
              <InfoHeader>
                <Icon src={payment} alt="payment" />
                <span>Payment</span>
              </InfoHeader>
              <PaymentDiv>
                
              </PaymentDiv>
              <SaveButton type="submit" value="CONFIRM" onClick={() => setPaymentIsHidden(true)}/>
            </InfoSection>
          }
          <ContactBar>
            <Icon src={cart} alt="cart" className="dropDown" />
            <span>Item Review & Coupons</span>
          </ContactBar>
        </UserInfo>
        <OrderSummary>
          <OrderInfo>Order ID # 2252252255</OrderInfo>
          <OrderInfo>
            Subtotal
            <span>$51024.97</span>
          </OrderInfo>
          <OrderInfo>
            Expedited Shipping
            <span>$5.00</span>
          </OrderInfo>
          <OrderInfo>
            PROMO CODE(X#3261)
            <span>-$5.00</span>
          </OrderInfo>
          <OrderTotal>
            Total
            <span>$51024.97</span>
          </OrderTotal>
          <PurchaseButton>PURCHASE</PurchaseButton>
        </OrderSummary>
      </Main>
    </Container>
  );
}

export default Checkout;
