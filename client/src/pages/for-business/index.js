import React, { useState } from 'react';
import ButtonField from '../../components/button-field';
import helperPerson from '../../assets/services/helper-person.png';
import numberOne from '../../assets/services/number-one.png';
import {
  businessService,
  helpedService,
} from '../../constants/services';
import ContactUs from '../../components/contact-us';
import { 
  Title,
  Description,
  HelpContainer,
  HelpContainerImage,
  HelpNumberOne,
  HelpNumberOneContent,
  HelpBg,
  HelpTitle,
  HelpContent,
  HelpLink,
  ServiceContainer,
  ServiceItemWrapper,
  ServiceItem,
  ServiceItemTitle,
  ProductContainer,
  ProductItem,
  ProductItemTitle,
  ProductItemDescription,
  ProductItemImg,
  PortfolioCarouselContainer,
  PortfolioTitle,
} from './forBusiness.style';
import {Container} from '../../styles/global.style';
import ResponsiveCarouselArrows from '../../components/responsive-carousel-arrows';
import AboutUsPricing from '../../components/aboutusPricing';

const ForBusiness = () => {
  const [freeAccount, setFreeAccount] = useState(false);

  const services = businessService.map((item) => {
    return (
      <ServiceItem key={item.name}>
        <img src={item.image} alt={item.name} />
        <ServiceItemTitle>{item.name}</ServiceItemTitle>
      </ServiceItem>
    );
  });

  const helped = helpedService.map((item) => {
    return (
      <ProductItem key={item.name}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <ProductItemImg src={item.image} alt={item.name} />
        </a>
        <ProductItemTitle>{item.name}</ProductItemTitle>
        <ProductItemDescription>{item.descript}</ProductItemDescription>
      </ProductItem>
    );
  });

  const sendToPricing = (e) => {
    e.preventDefault();
    setFreeAccount(true);
    window.location.replace('/forbusiness#pricing');
  };

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 480, itemsToShow: 3 },
  ];
  return (
    <Container>
      <HelpContainer>
        <HelpBg>
          <HelpNumberOne>
            <img src={numberOne} alt="#1 identifier" />
            <HelpNumberOneContent>
              #1 Digital company focused on Local &amp; Black Owned Businesses!
            </HelpNumberOneContent>
          </HelpNumberOne>
          <HelpTitle>
            <span>Helping Small Businesses Enter the Digital Age</span>
          </HelpTitle>
          <ButtonField color="primary" onClick={sendToPricing}>
            Get Started For Free
          </ButtonField>
          <HelpContent>
            We build and use strategies to drive digital growth and expand
            customer reach so you can focus on growing your business!
          </HelpContent>
          <HelpLink href="#products">
            Browse Our Past Work
          </HelpLink>
        </HelpBg>
        <HelpContainerImage
          src={helperPerson}
          alt="helper person"
        />
      </HelpContainer>
      <ServiceContainer>
        <Title>Services We Provide</Title>
        <Description>
          Local &amp; Black-owned businesses are having a tough time keeeping up
          with the technology of today. We are here to give small businesses an
          easy transition into the digital age.
        </Description>
        <ServiceItemWrapper>{services}</ServiceItemWrapper>
        <ButtonField color="greenPricing" onClick={sendToPricing}>
          See Pricing
        </ButtonField>
      </ServiceContainer>
      <ProductContainer>
        <PortfolioTitle>Businesses We&lsquo;ve Helped</PortfolioTitle>
        <PortfolioCarouselContainer>
          <ResponsiveCarouselArrows
            breakpoints={breakPoints}
            items={helped}
          />
        </PortfolioCarouselContainer>
      </ProductContainer>
      <AboutUsPricing freeAccount={freeAccount}></AboutUsPricing>
      <div id="contact">
        <ContactUs />
      </div>
    </Container>
  );
};

export default ForBusiness;
