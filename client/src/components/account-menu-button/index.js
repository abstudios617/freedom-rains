import React from 'react';
import { 
  AccountMenuButtonStyles, 
  IconContainer,
  InnerFlexible,
  OuterFlexible
} from './accountMenuButton.styles';

const AccountMenuButton = ({ icon, title, subtitle, onclick }) => {
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

export default AccountMenuButton;
