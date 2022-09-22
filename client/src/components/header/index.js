import React, { useState, useEffect } from 'react';
import Nav from '../nav';
import MobileNav from '../mobile-nav';
import { targetPage, resetCache, setUserData } from '../../utils/index';
import shopLogo from '../../assets/icons/freedom-left-color.png';
import {
  Container,
  Logo,
  MobileIcon,
  MobileX,
  FullWidth,
  NavWidth,
} from './header.styles';

const Header = ({ setIsLoggedIn, isLoggedIn }) => {
  const [menu, setMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hasGoogleData, setHasGoogleData] = useState(null);

  const openMobileNav = () => {
    setMenu(!menu);

    if (!menu) {
      window.location.href = '#';
    }
  };

  const logout = () => {
    resetCache();
    setIsLoggedIn(false);
    targetPage('login');
  };

  const googleLogin = async () => {
    setHasGoogleData(true);
    const params = new URLSearchParams(document.location.search);
    const hasData = params.has('google-data');

    if (hasData) {
      const token = params.get('google-data');
      const username = params.get('user');

      await setUserData({
        token,
        username
      });
      setIsLoggedIn(true);
      window.history.replaceState({}, {}, '/');
    }
  };

  useEffect(() => {
    menu
      ? document.querySelector('#root').classList.add('mobile')
      : document.querySelector('#root').classList.remove('mobile');
  }, [menu]);

  useEffect(() => {
    if (!hasGoogleData) {
      googleLogin();
    }
  }, [hasGoogleData]);

  return (
    <>
      <FullWidth>
        <Container>
          <Logo>
            <img
              src={shopLogo}
              alt="Freedom Super Saver 2"
              onClick={() => targetPage('')}
            />
          </Logo>
        </Container>
        {!menu ? (
          <MobileIcon onClick={openMobileNav}>
            <div></div>
            <div></div>
            <div></div>
          </MobileIcon>
        ) : (
          <MobileX onClick={openMobileNav}>X</MobileX>
        )}
      </FullWidth>
      <NavWidth className={!menu && 'closed'}>
        {!menu && (
          <Nav
            isLoggedIn={isLoggedIn}
            logout={logout}
            setShowSearch={setShowSearch}
            showSearch={showSearch}
          />
        )}

        {menu && (
          <MobileNav
            logout={logout}
            isLoggedIn={isLoggedIn}
          />
        )}
      </NavWidth>
    </>
  );
};

export default Header;
