import React from 'react';
import { 
  AccountMenuContainer,
  AccountMenuButtonStyles, 
  IconContainer,
  InnerFlexible,
  OuterFlexible
} from './accountMenu.styles';

export const AccountMenu = ({ children }) => {
  return (
    <AccountMenuContainer>
      {children}
    </AccountMenuContainer>
  );
};

export const AccountMenuButton = ({ icon, title, subtitle, onclick }) => {
  const contents = (
    <AccountMenuButtonStyles>
      <OuterFlexible>
        <IconContainer>
          <img src={icon} alt="" />
        </IconContainer>
        <InnerFlexible>
          <span>{title}</span>
          <small>{subtitle}</small>
        </InnerFlexible>
      </OuterFlexible>
    </AccountMenuButtonStyles>
  );
  
  return (
    <div onClick={onclick}>
      {contents}
    </div>
  );
};
