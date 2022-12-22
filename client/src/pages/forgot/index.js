import React, { useState } from 'react';
import { forgotPassword } from '../../requests/api-request';
import { useForm } from 'react-hook-form';
import ModalOneBtn from '../../components/modal-one-btn';
import LoginField from '../../components/login-field';
import ButtonField from '../../components/button-field';
import { targetPage } from '../../utils/index';
import { Submit, Subtitle, Resend } from './forgot.style';
import {Container, Title, Alert, ContactFields, Links} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';

const ForgotPassword = ({ isLoggedIn }) => {
  const [openModalOne, setOpenModalOne] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const { register, handleSubmit, getValues, errors } = useForm();

  const getNewPassword = async () => {
    const values = getValues();
    const account = await forgotPassword(values);

    if (account.statusCode === 200) {
      setErrMsg(null);
      setOpenModalOne(true);
    } else {
      console.log('Forgot Password Error');
      setErrMsg(account.message);
    }
  };

  const closeModal = () => {
    setOpenModalOne(false);
  };

  if (isLoggedIn) {
    targetPage('account');
  }

  return (
    <Container>
      <Title>
        <img src={FreedomLogo} width="100px" height="95px"></img><br/>
        <Subtitle>Forgot your password? No Worries! 
          <br/>We will send a new one to your e-mail &nbsp; <span role="img">😀</span>
        </Subtitle>
      </Title>
      {errMsg && <Alert>{errMsg}</Alert>}
      <ContactFields>
        <LoginField
          name="email"
          placeHolder="Email"
          type="email"
          register={register({
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        {errors.email && (
          <Alert>Please enter your email address</Alert>
        )}
      </ContactFields>
      <Submit>
        <ButtonField color="sent" onClick={handleSubmit(getNewPassword)}>
          Send
        </ButtonField>
      </Submit>
      <Submit>
        <Links onClick={() => targetPage('login')}>
          <Resend>Resend in 60 secs</Resend><br/>
        </Links>
      </Submit>
      <ModalOneBtn
        openModal={openModalOne}
        closeModal={closeModal}
        message1={'You will receive your new password via email.'}
        message2={'Thank you for using the Freedom App!!!'}
        hasBtn={false}
      />
    </Container>
  );
};

export default ForgotPassword;
