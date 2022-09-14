import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/input-field';
import { addEvent } from '../../requests/analytics-request';
import logo from '../../assets/contact/contactLogo.png';
import msgIcon from '../../assets/contact/contactMsg.png';
import emailIcon from '../../assets/contact/email.png';
import {Alert} from '../../styles/global.style';
import { 
  Cta, 
  Section,
  Logo,
  ContactHeader,
  ContactResponse,
  ContactIcon,
  ContactLogo,
  ContactThanks,
  ContactRespond,
  ContactMsgLeft,
  MessageTip,
  SendButton,
} from './contactUs.styles';
// import { contactUs } from '../../requests/api-request';

const ContactUs = () => {
  const [sentContact, setSentContact] = useState(false);
  const { register, handleSubmit, getValues, errors } = useForm();

  const sendContactInfo = async () => {
    const values = getValues();

    addEvent({
      event: 'Connect',
      props: {
        action: 'Form',
        values: values,
      },
    });

    console.log(values);
    // await contactUs(values);
    setSentContact(true);
  };

  return (
    <>
      {!sentContact && (
        <>
          <Cta>
            <h1>
              <Logo>
                <img
                  src={emailIcon}
                  alt="Email Icon"
                />
                CONTACT US
              </Logo>
            </h1>
          </Cta>
          <Section>
            <ContactHeader>
              In order to help you better, please tell us your email
            </ContactHeader>
            <InputField
              name="email"
              placeHolder="Your Email Address"
              type="text"
              register={register({
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email ? (
              <Alert>
                Please enter your email address
              </Alert>
            ) : null}
            <ContactHeader>
              Please describe how we can help you
            </ContactHeader>
            <MessageTip>
              (It is better to include your order number if this is an order issue)
            </MessageTip>
            <textarea
              type="text"
              ref={register}
              name="message"
              cols={200}
              rows={25}
              style={{maxWidth:'99%'}}
            />
            <SendButton
              onClick={handleSubmit(sendContactInfo)}
            >
              SEND
            </SendButton>
          </Section>
        </>
      )}
      {sentContact && (
        <ContactResponse>
          <ContactMsgLeft>
            <ContactLogo src={logo} alt="Freedom" />
            <ContactThanks>Thanks For Your Input</ContactThanks>
            <ContactRespond>
              The Team Will Get Back To You Within 48 Hours
            </ContactRespond>
          </ContactMsgLeft>
          <div>
            <ContactIcon src={msgIcon} alt="message" />
          </div>
        </ContactResponse>
      )}
    </>
  );
};

export default ContactUs;
