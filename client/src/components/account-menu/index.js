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

/**
 * AccountMenuButton
 * - icon: displaying icon for each particular function of button
 * - title: the title of the button
 * - subtitle: describes the purpose of the button in place
 * - onClick: onClick event handler designated for specific button
 * 
 *  Styling notes:
 *  - innerFlexible and outerFlexible indicate containers for flex styling layouts
 * 
 * @param {*} param0 
 * @returns 
 */
export const AccountMenuButton = ({ icon, title, subtitle, onClick }) => {
  return (
    <div onClick={onClick}>
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
    </div>
  );
};
