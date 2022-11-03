import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginTest from './components/login/LoginTest';
import Footer from './components/footer';
import Promo from './pages/promo';
import Header from './components/header';
import Arcade from './pages/arcade';
import Coupon from './pages/coupon';
import ContactUs from './pages/contact';
import SignIn from './pages/sign-in';
import { resetCache } from './utils';
import jwt_decode from 'jwt-decode';
import EarnTokens from './pages/tokens';
import ShoppingPreference from './pages/shopping-preference';
import CreateAccount from './pages/create-account';
import ForgotPassword from './pages/forgot';
import Account from './pages/account';
import Uninstall from './pages/uninstall';
import ForBusiness from './pages/for-business';
import Favorites from './pages/favorites';
import ProductClass from './pages/product-class';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import AboutUs from './pages/about-us';
import PricingPage from './pages/pricing';
import Watch from './pages/watch';
import FourOFour from './pages/404';
import { getUserToken } from './utils/account-utils';
import Merch from './pages/merch';
import CustomerService from './pages/customer-service';
import ShopSearch from './pages/shop-search';
import Game from './pages/game';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Confirmation from './pages/checkout/confirmation';

const PageView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [updateTokens, setUpdateTokens] = useState(false);

  const checkIsLoggedIn = async () => {
    const userToken = await getUserToken();

    if (userToken) {
      const { exp } = jwt_decode(userToken);
      const isTimeExpired = exp < (new Date().getTime() + 1) / 1000;

      setIsLoggedIn(!isTimeExpired);
    } else {
      setIsLoggedIn(false);
      resetCache();
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  });

  return (
    <Router>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/testing">
          <LoginTest />
        </Route>
        <Route exact path="/">
          <Homepage isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/earlyaccess">
          <Promo />
        </Route>
        <Route exact path="/arcade">
          <Arcade
            isLoggedIn={isLoggedIn}
            updateTokens={updateTokens}
            setUpdateTokens={setUpdateTokens}
          />
        </Route>
        <Route exact path="/arcade/:gameName">
          <Game isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/coupons">
          <Coupon />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/login">
          <SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/create">
          <CreateAccount
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route exact path="/forget">
          <ForgotPassword isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/preferences">
          <ShoppingPreference
            isLoggedIn={isLoggedIn}
            setUpdateTokens={setUpdateTokens}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route exact path="/missions">
          <EarnTokens isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/account">
          <Account
            isLoggedIn={isLoggedIn}
            setUpdateTokens={setUpdateTokens}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route exact path="/watch">
          <Watch />
        </Route>
        <Route exact path="/uninstall">
          <Uninstall />
        </Route>
        <Route exact path="/forbusiness">
          <ForBusiness />
        </Route>
        <Route exact path="/likes">
          <Favorites isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/shop/:shopId">
          <ProductClass isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/deals">
          <Shop isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/search/:type/:val">
          <ShopSearch isLoggedIn={isLoggedIn} /> 
        </Route>
        <Route exact path="/team">
          <AboutUs />
        </Route>
        <Route exact path="/pricing">
          <PricingPage />
        </Route>
        <Route exact path="/merch">
          <Merch />
        </Route>
        <Route exact path="/faqs">
          <CustomerService />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/checkout/confirmation">
          <Confirmation />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
          <FourOFour/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default PageView;
