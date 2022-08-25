import React from 'react';
import Login from '../../components/login';
import {Container, Title} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import { Sign } from './signin.style';

const SignIn = ({ setIsLoggedIn }) => {
  return (
    <Container>
      <Title>
        <img src={FreedomLogo} width="85px" height="75px"></img>
        <br></br>
        <Sign>Sign in to your freedom Account</Sign>
      </Title>
      <Login setIsLoggedIn={setIsLoggedIn} redirect="account" />
    </Container>
  );
};

export default SignIn;
