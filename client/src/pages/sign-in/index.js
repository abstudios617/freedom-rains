import React from 'react';
import Login from '../../components/login';
import {Container, Title} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import { Sign } from './signin.style';
import LogoIcon from '../../components/logo-icons';

const SignIn = ({ setIsLoggedIn }) => {
  return (
    <Container>
      <Title>
        <LogoIcon src={FreedomLogo} alt="freedom" />
        <br/>
        <Sign>Sign in to your Freedom Account</Sign>
      </Title>
      <Login setIsLoggedIn={setIsLoggedIn} redirect="account" />
    </Container>
  );
};

export default SignIn;
