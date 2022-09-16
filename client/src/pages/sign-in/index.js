import React from 'react';
import Login from '../../components/login';
import {Container, Title} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import { Sign } from './signin.style';

const SignIn = ({ setIsLoggedIn }) => {
  return (
    <Container>
      <Title>
        <img src={FreedomLogo} width="100px" height="95px"></img>
        <br/>
        <Sign>Sign in to your Freedom Account</Sign>
      </Title>
      <Login setIsLoggedIn={setIsLoggedIn} redirect="account" />
    </Container>
  );
};

export default SignIn;
