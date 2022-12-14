import React from 'react';
import { signIn } from '../../requests/api-request';
import { setUserData, targetPage, resetCache } from '../../utils/index';
import { useForm } from 'react-hook-form';
import LoginField from '../login-field';
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
import google from '../../assets/icons/new_google.png';
import LogoIcon from '../logo-icons';
import { setLoginCookie } from '../../utils/account-utils';

const Login = ({ redirect, setIsLoggedIn }) => {
  const { register, handleSubmit, getValues, errors } = useForm();

  const sendContactInfo = async () => {
    const values = getValues();

    // Returns a Cookie
    const isSignedIn = await signIn(values);

    if (isSignedIn.statusCode === 201) { // 201 because backend returns 201 for sign-in success with cookies
      // document.cookie = `token=${isSignedIn.token}; path= '/'; httpOnly; secure;`;
      setLoginCookie(isSignedIn.token);
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
          {errors.email && <Alert>Email required</Alert>}
          <LoginField
            name="password"
            placeHolder="Password"
            type="password"
            register={register({ 
              required: true
            })}
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
            <LogoIcon src={google} alt="google" />
          </ButtonField>
          <br/><br/><br/>
          <NoAccount>Don&apos;t have an account?</NoAccount>
          <br />
          <ButtonField color="createAcc" onClick={() => targetPage('create')}>
            Create Account
          </ButtonField>
        </ContactFields>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
