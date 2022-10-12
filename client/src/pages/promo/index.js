import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/input-field';
import ButtonField from '../../components/button-field';
import { addLead } from '../../requests/api-request';
import { addEvent } from '../../requests/analytics-request';
import { features } from '../../constants/promo';
import ModalOneBtn from '../../components/modal-one-btn';
import { 
  Content,
  Promotion,
  Section,
  Info,
} from './promo.style';
import {Container, Alert} from '../../styles/global.style';
import DropDown from '../../components/dropdown';

const Promo = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit, getValues, errors } = useForm();

  const sendContactInfo = async () => {
    const values = getValues();

    const sentInfo = await addLead(values);

    if (sentInfo.status === 'error') {
      setErrorMessage(sentInfo.message);
      setModalIsOpen(true);
    } else {
      addEvent({
        event: 'Local Deals sign up',
        props: {
          action: 'Click',
          label: 'collected contact info',
        },
      });
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const featureDropdown = features.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    );
  });

  return (
    <Promotion>
      <Container>
        <Section>
          <Info>
            <Content>
              <h2>Sign Up For Local Deals Around Boston!</h2>
            Subscribe to our newsletter for local coupons, special online deals
            and updates about our online shopping assistant. If you&lsquo;re a
            SUPER SAVER sign up below!
            </Content>
            <InputField
              name="first_name"
              placeHolder="First Name..."
              type="text"
              register={register({ required: true })}
            />
            {errors.first_name ? (
              <Alert>Please enter your first name</Alert>
            ) : null}
            <InputField
              name="last_name"
              placeHolder="Last Name..."
              type="text"
              register={register({ required: true })}
            />
            {errors.last_name ? (
              <Alert>Please enter your last name</Alert>
            ) : null}
            <InputField
              name="email"
              placeHolder="Email..."
              type="text"
              register={register({
                required: true,
                pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email ? (
              <Alert>
              Please enter email address correctly
              </Alert>
            ) : null}
            <InputField
              name="zip"
              placeHolder="Zip Code..."
              type="text"
              register={register({
                required: true,
                pattern: /^[0-9]*$/,
                maxLength: 5,
              })}
            />
            {errors.zip ? (
              <Alert>Please enter your zip code</Alert>
            ) : null}
            <DropDown
              name="feature"
              ref={register({
                required: true,
              })}
              label="Which app feature interests you the most?"
              list={featureDropdown}
            >
            </DropDown>
            <ButtonField color="primary" onClick={handleSubmit(sendContactInfo)}>
            Enter
            </ButtonField>
          </Info>
        </Section>
        {!errorMessage ? 
          (<ModalOneBtn
            openModal={modalIsOpen}
            closeModal={closeModal}
            message1={'Thank you for joining the Freedom Community! Be on the lookout for our newsletter with special deals and info on upcoming events!'}
            hasBtn={false}
          />)
          :
          (<ModalOneBtn
            openModal={modalIsOpen}
            closeModal={closeModal}
            message1={'Thank you for wanting to join the Freedom Community!' + errorMessage}
            hasBtn={false}
          />)
        }
      </Container>
    </Promotion>
  );
};

export default Promo;
