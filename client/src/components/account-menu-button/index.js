import React from 'react';
import { 
  AccountMenuButtonStyles, 
  IconContainer,
  InnerFlexible,
  OuterFlexible
} from './accountMenuButton.styles';

const AccountMenuButton = ({ icon, title, subtitle }) => {
  return (
    <AccountMenuButtonStyles>
      <OuterFlexible>
        <IconContainer>
          {icon}
        </IconContainer>
        <InnerFlexible>
          <span>{title}</span>
          <small>{subtitle}</small>
        </InnerFlexible>
      </OuterFlexible>
    </AccountMenuButtonStyles>
  );
};

export default AccountMenuButton;
