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
  Edit,
  EditButton
} from "./checkout.styles";
import { targetPage } from '../../utils/index';
import mail from "../../assets/icons/mail.svg";
import edit from "../../assets/icons/edit.svg";

// contact information section should only appear
// if user is not logged in

const Checkout = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState("");

  const ContactDropdown = () => {
    return (
      <InfoSection>
        <InfoHeader>
          <Icon src={mail} alt="mail" />
          <span>Contact Information</span>
        </InfoHeader>
        <Email placeholder="    Email Address:" value={email} onChange={e => setEmail(e.target.value)} />
        <NotificationCheckBox>
          <input type="checkbox" />
          <span>Yes, I would like to be notified of product updates, upgrades, and special offeringse.</span>
        </NotificationCheckBox>
        <SaveButton onClick={() => setIsHidden(true)}>SAVE</SaveButton>
        <Login onClick={() => targetPage("login")}>Already ready have an account? login &gt;</Login>
      </InfoSection>
    );
  };

  const ContactSection = () => {
    return (
      <ContactBar>
        <Icon src={mail} alt="mail" className="dropDown" />
        <span>{email === "" ? "Type Email Here" : email}</span>
        <EditButton onClick={() => setIsHidden(false)} >
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
          {isHidden ? <ContactSection /> : <ContactDropdown />}
        </UserInfo>
      </Main>
    </Container>
  );
}

export default Checkout;