import React from 'react';
import ButtonField from '../../components/button-field';
import fourOFourImg from '../../assets/404/404.png';
import { targetPage } from '../../utils/index';
import {
  Container,
  Title,
  SubTitle,
} from '../../styles/global.style';
import {
  FourOFourImg,
  FourOFourImgContainer,
  FourOFourMessage,
  FourOFourRedirectContainer,
  FourOFourSocialsContainer,
  FourOFourSocialsImg,
} from './404.style';
import { socialsConstant } from '../../constants/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourOFour = () => {

  const socials = socialsConstant.map((item) => {
    return (
      <ButtonField onClick={() => window.open(item.url)} key={item.name}>
        <FourOFourSocialsImg>
          <FontAwesomeIcon 
            alt={item.name}
            icon={item.image}
          />
        </FourOFourSocialsImg>
      </ButtonField>
    );
  });

  return (
    <Container>
      <FourOFourImgContainer>
        <FourOFourImg src={fourOFourImg} alt="404 Image"/>      
      </FourOFourImgContainer>
      <Title>
        <span>Oops!</span>
      </Title>
      <FourOFourMessage>We can&apos;t seem to find the page you are looking for</FourOFourMessage>
      <FourOFourRedirectContainer>
        <ButtonField color="primary" onClick={() => targetPage('')}>
          Back to Homepage
        </ButtonField>
        <ButtonField color="allWhite" onClick={() => window.open('https://shopwithfreedomblog.wordpress.com/')}>
          Read blogs
        </ButtonField>
      </FourOFourRedirectContainer>
      <SubTitle><strong>Follow us on</strong></SubTitle>
      <FourOFourSocialsContainer>{socials}</FourOFourSocialsContainer>
    </Container>
  );
};

export default FourOFour;
