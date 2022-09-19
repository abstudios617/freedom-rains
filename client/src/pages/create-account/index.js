import React, { useState } from 'react';
import { createAccount } from '../../requests/api-request';
import { setUserData, targetPage } from '../../utils/index';
import { useForm } from 'react-hook-form';
import InputField from '../../components/input-field';
import ButtonField from '../../components/button-field';
import { Submit, Create, Or } from './createAccount.style';
import {
  Container, 
  ContactFields, 
  Alert, 
  Title
} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import { goToSignIn } from '../../utils/account-utils';
import google from '../../assets/icons/new_google.png';
import StepOne from '../../assets/account/step_one.png';
import LogoIcon from '../../components/logo-icons';


const CreateAccount = ({ isLoggedIn, setIsLoggedIn }) => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [errorMsg, setErrorMsg] = useState(null);
  const googleSignIn = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_LOGIN;
  };


  const createUserAccount = async () => {
    const values = getValues();
    const account = await createAccount(values);

    if (account.statusCode === 200) {
      await setUserData(account);
      setIsLoggedIn(true);
      goToSignIn('account', 'Account Created');
    } else {
      console.log('Create Account Error');
      setErrorMsg(account.message);
    }
  };

  if (isLoggedIn) {
    targetPage('account');
  }

  return (
    <Container>
      <Title>
        <img src={StepOne} width="65%"></img><br/><br/>
        <LogoIcon src={FreedomLogo} alt="freedom" />
        <Create>Create New Account</Create>
      </Title>
      <ContactFields>
        {errorMsg && <Alert>{errorMsg}</Alert>}
        <InputField
          name="First Name"
          placeHolder="First Name"
          type="First Name"
          register={register({ required: true })}
        />
        <InputField
          name="Last Name"
          placeHolder="Last Name"
          type="Last Name"
          register={register({ required: true })}
        />
        <InputField
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
        <InputField
          name="password"
          placeHolder="Password"
          type="password"
          register={register({ required: true })}
        />
        {errors.password && (
          <Alert>Please enter your password</Alert>
        )}
        <Submit>
          <ButtonField color="create" onClick={handleSubmit(createUserAccount)}>
            Create Account
          </ButtonField>
        </Submit><br/><br/>
        <Or>or</Or><br/>
        <Submit>
          <ButtonField color="google" onClick={googleSignIn}>
            Sign In With Google
            <LogoIcon src={google} alt="google"/>
          </ButtonField>
        </Submit><br/><br/>
      </ContactFields>
    </Container>
  );
};

export default CreateAccount;
