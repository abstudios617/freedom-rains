import React, { useState } from 'react';
import { 
  TvNavContainer,
  TvNavItem, 
  Vector,
} from './TvNav.styles';
import TvCategories from '../TvCategories';
import vector from '../../assets/icons/blueVector.svg';
import { Link } from 'react-router-dom';
const TvNav = () => {
  const [isOpen, setIsOpen] = useState('');

  const handleClick = () => {
    if(isOpen) {
      setIsOpen('');
    } else {
      setIsOpen('open');
    }
  };

  return (
    <>
      <TvNavContainer>
        <TvNavItem><Link to={'/tv+'}>Home</Link></TvNavItem>
        <TvNavItem>
          Categories
          <Vector className={isOpen} src={vector} alt="vector" onClick={handleClick} />
        </TvNavItem>
        <TvNavItem><Link to={'/tv+/subscriptions'}>Subscriptions</Link></TvNavItem>
        <TvNavItem><Link to={'/tv+/saved'}>Saved</Link></TvNavItem>
      </TvNavContainer>
      {isOpen ? <TvCategories /> : null}
    </>
  );
};

export default TvNav;
