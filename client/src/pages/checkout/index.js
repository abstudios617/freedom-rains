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
} from "./checkout.styles";
import { targetPage } from '../../utils/index';
import mail from "../../assets/icons/mail.svg";
import edit from "../../assets/icons/edit.svg";
import addressImg from "../../assets/icons/address.svg";

// contact information section should only appear
// if user is not logged in

const Checkout = () => {
  const [contactIsHidden, setContactIsHidden] = useState(true);
  const [adressIsHidden, setAddressIsHidden] = useState(true);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

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
          <SaveButton type="submit" value="SAVE" onClick={() => setAddressIsHidden(true)}/>
        </InfoSection>
        }
        </UserInfo>
      </Main>
    </Container>
  );
}

export default Checkout;