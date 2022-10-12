import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/input-field';
import ButtonField from '../../components/button-field';
import { addEvent } from '../../requests/analytics-request';
import { contactIndustry, contactService } from '../../constants/contact';
import phoneImg from '../../assets/contact/number.png';
import emailImg from '../../assets/contact/email.png';
import websiteImg from '../../assets/contact/website.png';
import logo from '../../assets/contact/contactLogo.png';
import msgIcon from '../../assets/contact/contactMsg.png';
import {Alert} from '../../styles/global.style';
import { 
  Cta, 
  Section, 
  Info, 
  ContactDetails,
  ContactDescription, 
  ContactTitle, 
  ContactResponse,
  ContactIcon,
  ContactLogo,
  ContactThanks,
  ContactRespond,
  ContactMsgLeft
} from './contactUs.styles';
import DropDown from '../dropdown/index';
import { contactUs } from '../../requests/api-request';

const ContactUs = () => {
  const [sentContact, setSentContact] = useState(false);
  const [industry, setIndustry] = useState(null);
  const [service, setService] = useState(null);
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

    values.service=service;
    values.industry=industry;
    await contactUs(values);
    setSentContact(true);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const industryDropdown = contactIndustry.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  const serviceDropdown = contactService.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      {!sentContact && (
        <>
          <Cta>
            <h2>Connect with us!</h2>
          </Cta>
          <Section>
            <Info>
              <ContactTitle>Contact Information</ContactTitle>
              <ContactDescription>
                Fill out the form and our Team will get back to you within 48
                hours
              </ContactDescription>
              <ContactDetails>
                <img src={phoneImg} alt="phone" />
                1-781-975-6166
              </ContactDetails>
              <ContactDetails>
                <img src={emailImg} alt="email" />
                <a href="mailto:sjackson@freedomrains.com">sjackson@freedomrains.com</a>
              </ContactDetails>
              <ContactDetails>
                <img src={websiteImg} alt="website" />
                <a href="https://www.freedomrains.com/">www.freedomrains.com</a>
              </ContactDetails>
            </Info>
            <div>
              <InputField
                name="first_name"
                placeHolder="Enter First Name"
                type="text"
                register={register({ required: true })}
              />
              {errors.first_name ? (
                <Alert>Please enter your first name</Alert>
              ) : null}
              <InputField
                name="last_name"
                placeHolder="Enter Last Name"
                type="text"
                register={register({ required: true })}
              />
              {errors.last_name ? (
                <Alert>Please enter your last name</Alert>
              ) : null}
              <InputField
                name="email"
                placeHolder="Enter Email"
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
              <InputField
                name="phone"
                placeHolder="Enter Phone Number"
                type="text"
                register={register({
                  required: true,
                  pattern: /^[0-9]*$/,
                  maxLength: 10,
                })}
                extra="Use format 1234567890"
              />
              {errors.phone ? (
                <Alert>
                  Please enter your phone number
                </Alert>
              ) : null}
              <DropDown
                name="industry"
                onChange={handleIndustryChange}
                ref={register({
                  required: true,
                })}
                label="What Industry are you in?"
                list={industryDropdown}
              >
              </DropDown>
              <InputField
                name="website"
                placeHolder="Enter Website"
                type="text"
                register={register({ required: false })}
              />
              <DropDown
                name="service"
                onChange={handleServiceChange}
                ref={register({
                  required: true,
                })}
                label="What service do you need?"
                list={serviceDropdown}
              >
              </DropDown>
              <InputField
                name="message"
                placeHolder="Leave a Message"
                type="text"
                register={register({ required: false })}
              />
              <br/>
              <ButtonField
                color="primary"
                onClick={handleSubmit(sendContactInfo)}
              >
                Contact Sales
              </ButtonField>
            </div>
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
      {!sentContact && (
        <Cta>
          <h3>We can&lsquo;t wait to work with you!</h3>
        </Cta>
      )}
    </>
  );
};

export default ContactUs;
