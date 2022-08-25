import React from 'react';
import { targetPage } from '../../utils/index';
import { 
  NavSection,
  Coupons,
  Resources,
  NavContainer,
  ArrowUp
} from './nav.styles';
import Categories from '../coupon-categories';
import Stores from '../local-stores';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  return (
    <NavContainer>
      <NavSection>
        <Coupons>
          <span onClick={() => targetPage('coupons')}>My Coupons</span>
        </Coupons>
        <Coupons>
          <span onClick={() => targetPage('coupons')}>Coupons</span>
        </Coupons>
        <Resources>
          <span>Categories<a><KeyboardArrowDownIcon/></a></span>
          <ArrowUp/>
          <Categories/>
        </Resources>
        <Resources>
          <span>Local Stores<a><KeyboardArrowDownIcon/></a></span>
          <ArrowUp/>
          <Stores/>
        </Resources>
      </NavSection>
      <NavSection className="shop">
        <Resources>
          <span onClick={() => targetPage('')}>Shop Freedom</span>
        </Resources>
      </NavSection>
    </NavContainer>
  );
};

export default Navbar;
