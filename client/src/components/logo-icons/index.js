import React from 'react';
import { LogoIconContainer } from './logoIcon.styles';

const LogoIcon = ({ src, alt }) => {
  return (
    <LogoIconContainer>
      <img 
        src={src} 
        alt={alt} 
        className={alt}
      />
    </LogoIconContainer>
  );
};

export default LogoIcon;
