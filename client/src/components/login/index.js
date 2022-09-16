import React from 'react';
import { signIn } from '../../requests/api-request';
import { setUserData, targetPage, resetCache } from '../../utils/index';
import { useForm } from 'react-hook-form';
import InputField from '../input-field';
import ButtonField from '../button-field';
import {
  LoginBox,
  LoginContainer,
  ForgetButton,
  Or,
  NoAccount
} from './login.styles';
import {
  Alert,
  Links,
  ContactFields,
} from '../../styles/global.style';
import google from '../../assets/footer/new_google.png';

const Login = ({ redirect, setIsLoggedIn }) => {
  const { register, handleSubmit, getValues, errors } = useForm();

  const sendContactInfo = async () => {
    const values = getValues();

    const isSignedIn = await signIn(values);

    if (isSignedIn.statusCode === 200) {
      await setUserData(isSignedIn);
      setIsLoggedIn(true);
      targetPage(redirect);
    } else {
      console.log('Sign In Error');
      resetCache();
      setIsLoggedIn(false);
    }
  };

  const googleSignIn = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_LOGIN;
  };

  return (
    <LoginContainer>
      <LoginBox>
        <ContactFields>
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
          {errors.email && <Alert>Email required</Alert>}
          <InputField
            name="password"
            placeHolder="Password"
            type="password"
            register={register({ required: true })}
          />
          {errors.password && <Alert>Password required</Alert>}
          <br></br>
          <ButtonField color="sign-in" onClick={handleSubmit(sendContactInfo)}>
            Sign In
          </ButtonField>
          <Links onClick={() => targetPage('forget')}>
            <ForgetButton>Forget Password?</ForgetButton>
          </Links>
          <Or>or</Or>
          <br></br>
          <ButtonField color="google" onClick={googleSignIn}>
            Sign in with Google
            <img src={google} alt="Google" style={
              { maxWidth: '25px', maxHeight: '25px', marginLeft: '10px', marginTop: '-1px' }
            }/>
          </ButtonField>
          <br></br>
          <br></br>
          <br></br>
          <NoAccount>Don&apos;t have an account?</NoAccount>
          <br></br>
          <ButtonField color="createAcc" onClick={() => targetPage('create')}>
            Create Account
          </ButtonField>
        </ContactFields>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
