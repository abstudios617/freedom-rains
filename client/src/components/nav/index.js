import React, { useEffect } from 'react';
import { useState } from 'react';
import { getItem, targetPage } from '../../utils/index';
import ButtonField from '../button-field';
import logo from '../../assets/icons/freedom-left-color.png';
import SearchBar from '../search-bar';
import local_mall from '../../assets/header/local_mall.png';
import shopping_cart from '../../assets/header/shopping_cart.png';
import sell from '../../assets/header/sell.png';
import image from '../../assets/header/image.png';
import desktop_windows from '../../assets/header/desktop_windows.png';
import sports_esports from '../../assets/header/sports_esports.png';
import group from '../../assets/header/group.png';
import vector from '../../assets/header/vector.png';
import {
  NavSection,
  ProfileImage,
  SubNav,
  Coupons,
  FreedomTV,
  Activities,
  Resources,
  Box,
  Logo,
  Image,
} from './nav.styles';
import { NavContainer } from '../header/header.styles';

const Nav = ({ isLoggedIn, goToMerchPage }) => {
  const userData = JSON.parse(getItem('accountInfo'));
  const [currentPage, setCurrentPage] = useState('/');
  const functionName = () => {
    const pathname = window.location.pathname;
    setCurrentPage(pathname);
  };

  useEffect(() => {
    functionName();
  }, []);

  return (
    <NavContainer>
      <NavSection>
        <Coupons>
          <span onClick={() => targetPage('')}>
            <Logo src={logo} alt="Freedom logo" />
          </span>
        </Coupons>
        <SearchBar>
        </SearchBar>

        {isLoggedIn ? (
          <>
            <ProfileImage>
              <div className="profile-pic-div">
                <img src={image} />
              </div>
            </ProfileImage>
            <Box>
              <div className="container">
                <div className="item1">  {userData ? userData.first_name : 'Mary'} </div>
                <div className="item2" color="primary">
                  Account & Menu
                  <span className="click" onClick={() => targetPage('account')}> {'>'} </span>
                </div>
              </div>
            </Box>
            <ProfileImage>
              <img src={shopping_cart} />
            </ProfileImage>
          </>
        ) : (
          <>
            <ButtonField
              color="allWhite"
              onClick={() => targetPage('login')}
            >
              LOG IN
            </ButtonField>
            <ButtonField
              color="primary"
              onClick={() => targetPage('create')}
            >
              SIGN UP
            </ButtonField>

          </>
        )}
      </NavSection>
      <NavSection className={'bottom'}>
        <Coupons>
          <Image src={local_mall} alt="Local_Mall" />
          <span className={currentPage === '/search' && 'active'} onClick={() => { targetPage('deals'); }}>SHOP</span>
        </Coupons>
        <Coupons>
          <Image src={sell} alt="Sell" />
          <span className={currentPage === '/coupons' && 'active'} onClick={() => targetPage('coupons')}>COUPON</span>
        </Coupons>
        <FreedomTV>
          <Image src={desktop_windows} alt="Desktop_Windows" />
          <span className={currentPage === '/freedomtv' && 'active'} onClick={() => targetPage('watch')}>TV+</span>
        </FreedomTV>
        <Activities>
          <Image src={sports_esports} alt="Sports_Exports" />
          <span className={currentPage === '/games' && 'active'} onClick={() => targetPage('arcade')}>GAME</span>
        </Activities>
        <Resources>
          <Image src={group} alt="Group" />
          <span onClick={() => targetPage('team')}>ABOUT US</span>
          <SubNav className={'subResources'}>
            <li onClick={goToMerchPage}>Buy Freedom Merch</li>
            <li onClick={() => targetPage('contact')}>Contact Us</li>
          </SubNav>
        </Resources>
        <Resources className={'forbusiness'}>
          <Image src={vector} alt="vector" />
          <span onClick={() => targetPage('forbusiness')}>FOR BUSINESS</span>
          <SubNav className={'subResources'}>
            <li onClick={() => targetPage('forbusiness#products')}>Past Work</li>
            <li onClick={() => targetPage('pricing')}>Pricing</li>
            <li onClick={() => targetPage('forbusiness#contact')}>Connect With Us</li>
          </SubNav>
        </Resources>
      </NavSection>
    </NavContainer >
  );
};

export default Nav;
