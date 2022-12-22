import React, { useState } from 'react';
import { getItem, targetPage } from '../../utils/index';
import { useHistory  } from 'react-router-dom';
import ButtonField from '../button-field';
import logo from '../../assets/icons/freedom-logo-small.png';
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
  NavContainer,
  NavTop,
  NavBottom,
  UserIcons,
  SubNav,
  Coupons,
  FreedomTV,
  Activities,
  Resources,
  UserContainer,
  Logo,
  Image,
  BtnContainer,
  LogoContainer,
  UserDataContainer,
  NavItemsContainer,
  BusinessContainer
} from './nav.styles';

import './nav.css';

const Nav = ({ isLoggedIn }) => {
  const userData = JSON.parse(getItem('accountInfo'));
  const [tabIndex, SetTab] = useState(0);
  const history = useHistory();

  const handleClick = (e, num) =>{
    e.preventDefault(); //This makes it so it doesn't refresh on each tab click
    SetTab(num);
    history.push(`/${e.target.title}`);
  };


  //className added for readability in the Dom view
  return (
    <NavContainer className="nav-container">
      <NavTop className="nav-top">
        <LogoContainer>
          <Logo src={logo} alt="Freedom logo" className="logo" onClick={(e) => handleClick(e, 0)} title=""/>
        </LogoContainer>
        <SearchBar className="searchBar" />
        {isLoggedIn ? (
          <>
            <UserDataContainer className="userDataContainer">

              <UserContainer className="userContainer" title="account" onClick={(e) => handleClick(e, 0)} >
                
                <UserIcons className="profileImage" src={image} />
                <div className="container">
                  <div className="item1">
                    {userData ? userData.first_name : 'Mary'}
                  </div>
                  <div className="item2" color="primary">
                    Account & Menu
                  </div>
                </div>
              </UserContainer>
              <UserIcons className="shopping-cart" src={shopping_cart} />
            </UserDataContainer>
          </>

        ) : (

          <BtnContainer>
            <ButtonField 
              className="Button-field"
              color="allWhite"
              title="login"
              onClick={() => targetPage('login')}
            >
              LOG IN
            </ButtonField>
            <ButtonField
              className="Button-field small"
              color="primary"
              title="create"
              onClick={() => targetPage('create')}
            >
              SIGN UP
            </ButtonField>

          </BtnContainer>
        )}
      </NavTop>

      {/* start of Bottom */}
      <NavBottom className="Nav-bottom">
        
        {/* Start of left side container contents */}
        <NavItemsContainer className="Nav-items">
          <Coupons className={tabIndex === 0 && 'active'} >
            <Image src={local_mall} alt="Local_Mall" />

            {/* 'deals' */}
            <span title="deals" onClick={(e) => handleClick(e, 0)}>SHOP</span>

          </Coupons>
          <Coupons className={tabIndex === 1 && 'active'} >
            <Image src={sell} alt="Sell" />

            {/* 'coupons' */}
            <span title="coupons" onClick={(e) => handleClick(e, 1)}>COUPON</span> 

          </Coupons>

          <FreedomTV className={tabIndex === 2 && 'active'} >
            <Image src={desktop_windows} alt="Desktop_Windows" />

            {/* 'watch' */}
            <span  title="watch" onClick={(e) => handleClick(e, 2)}>TV+</span>

          </FreedomTV>

          <Activities className={tabIndex === 3 && 'active'}>
            <Image src={sports_esports} alt="Sports_Exports" />

            {/* 'arcade' */}
            <span title="arcade" onClick={(e) => handleClick(e, 3)}>GAME</span>

          </Activities>
        
          <Resources className={tabIndex === 4 && 'active'} >
            <Image src={group} alt="Group" className="Image"/>

            <span title="team" onClick={(e) => handleClick(e, 4)}>ABOUT US</span>

            <SubNav className={'subResources'}>
              <li onClick={
                () => window.open('https://shopfreedom.io/products/embroidered-polo-shirt', '_blank')
              }>Buy Freedom Merch</li>

              <li title="contact" onClick={(e) => handleClick(e, 4)}>Contact Us</li>

            </SubNav>
          </Resources>
        </NavItemsContainer>
        
        {/* End of left side container contents */}

        {/* Right side container contents */}
        <BusinessContainer className="Business">
          <Resources className={tabIndex === 5 && 'active'}>
            <Image src={vector} alt="vector" />

            <span onClick={(e) => handleClick(e, 5)} title="forbusiness">FOR BUSINESS</span>

            <SubNav className={'subResources'}>

              <li title="forbusiness#products" onClick={(e) => handleClick(e, 4)}>Past Work</li>

              <li title="pricing" onClick={(e) => handleClick(e, 4)}>Pricing</li>

              <li title="forbusiness#contact" onClick={(e) => handleClick(e, 4)}>Connect With Us</li>
            </SubNav>
          </Resources>
        </BusinessContainer>
        
        {/* End of right side container contents */}

      </NavBottom>
    </NavContainer >
  );
};

export default Nav;
