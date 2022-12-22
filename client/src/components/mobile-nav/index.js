import React, { useState } from 'react';
import { targetPage, getItem } from '../../utils/index';
import ButtonField from '../button-field';
import { NavContainer } from '../header/header.styles';
import SearchBar from '../search-bar';
import { 
  MobileNavComponent,
  WelcomeSection,
  WelcomeCopy,
  WelcomeBtn,
  Coupons,
  FreedomTV,
  Activities,
  Resources,
  SignIn
} from './mobileNav.styles';

const MobileNav = ({ isLoggedIn, logout }) => {
  const [mobileAccount, setMobileAccount] = useState(false);
  const [mobileResource, setMobileResource] = useState(false);
  const [mobileService, setMobileService] = useState(false);
  const userData = JSON.parse(getItem('accountInfo'));

  return (
    <NavContainer>
      <SearchBar showSearch={true} />
      <MobileNavComponent>
        <SignIn>
          <span onClick={() => setMobileAccount(!mobileAccount)}>Account</span>
          {mobileAccount && (
            <ul>
              <WelcomeSection>
                <WelcomeCopy>
                  {isLoggedIn
                    ? `Hi, ${(userData) ? userData.first_name : 'First Name'}`
                    : 'Welcome To Shop With Freedom!'}
                </WelcomeCopy>
                <WelcomeBtn>
                  {isLoggedIn ? (
                    <>
                      <ButtonField
                        color="primary"
                        onClick={() => targetPage('account')}
                      >
                        Account
                      </ButtonField>
                      <ButtonField color="allWhite" onClick={logout}>
                        Log Out
                      </ButtonField>
                    </>
                  ) : (
                    <>
                      <ButtonField
                        color="primary"
                        onClick={() => targetPage('create')}
                      >
                        Join
                      </ButtonField>
                      <ButtonField
                        color="allWhite"
                        onClick={() => targetPage('login')}
                      >
                        Log In
                      </ButtonField>
                    </>
                  )}
                </WelcomeBtn>
              </WelcomeSection>
              <li onClick={() => targetPage('missions')}>Tokens</li>
              <li onClick={() => targetPage('likes')}>Favorites</li>
              <li onClick={() => targetPage('preferences')}>
                Shopping Preference
              </li>
            </ul>
          )}
        </SignIn>
        <Resources>
          <span onClick={() => setMobileService(!mobileService)}>
            For Business
          </span>
          {mobileService && (
            <ul>
              <li onClick={() => targetPage('forbusiness')}>Services</li>
              <li onClick={() => targetPage('forbusiness#products')}>
                Products
              </li>
              <li onClick={() => targetPage('pricing')}>Pricing</li>
              <li onClick={() => targetPage('forbusiness#contact')}>
                Connect With Us
              </li>
            </ul>
          )}
        </Resources>
        <Resources>
          <span onClick={() => setMobileResource(!mobileResource)}>
            About Us
          </span>
          {mobileResource && (
            <ul>
              <li onClick={() => targetPage('team')}>Our Mission</li>
              <li onClick={() => targetPage('merch')}>Buy Freedom Merch</li>
              <li onClick={() => targetPage('contact')}>Contact Us</li>
            </ul>
          )}
        </Resources>
        <Coupons>
          <span onClick={() => targetPage('deals')}>Shop</span>
        </Coupons>
        <Coupons>
          <span onClick={() => targetPage('coupons')}>Coupon</span>
        </Coupons>
        <FreedomTV>
          <span onClick={() => targetPage('watch')}>Watch</span>
        </FreedomTV>
        <Activities>
          <span onClick={() => targetPage('arcade')}>Game</span>
        </Activities>
      </MobileNavComponent>
    </NavContainer>
  );
};

export default MobileNav;
