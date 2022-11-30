import React, { useState } from 'react';
import { createAccount } from '../../requests/api-request';
import { setUserData, targetPage } from '../../utils/index';
import { useForm } from 'react-hook-form';
import InputField from '../../components/input-field';
import ButtonField from '../../components/button-field';
import { Submit, Create, ButtonImg, Or } from './createAccount.style';
import {Container, ContactFields, Alert, Title} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import { goToSignIn } from '../../utils/account-utils';
import google from '../../assets/footer/google.png';
import StepOne from '../../assets/account/step_one.png';


const CreateAccount = ({ isLoggedIn, setIsLoggedIn }) => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [errorMsg, setErrorMsg] = useState(null);
  const googleSignIn = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_LOGIN;
  };


  const createUserAccount = async () => {
    const values = getValues();
    console.log(values);
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
        <img src={FreedomLogo} width="85px" height="75px"></img><br></br>
        <Create>Create New Account</Create>
      </Title>
      <ContactFields>
        {errorMsg && <Alert>{errorMsg}</Alert>}
        <InputField
          name="First Name"
          placeHolder="First Name"
          type="first_name"
          register={register({ required: true })}
        />
        <InputField
          name="Last Name"
          placeHolder="Last Name"
          type="last_name"
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
            Create
          </ButtonField>
        </Submit><br/><br/>
        <Or>or</Or><br/>
        <Submit>
          <ButtonField color="google" onClick={googleSignIn}>
            <ButtonImg alt="Google" src={google}/>
                Sign In With Google
          </ButtonField>
        </Submit><br/><br/>
      </ContactFields>
    </Container>
  );
};

export default CreateAccount;
