import React, { useState } from 'react';
import ButtonField from '../../components/button-field';
import helperPerson from '../../assets/services/helper-person.png';
import processPeople from '../../assets/services/process.png';
import testimony from '../../assets/services/testimony.png';
import stars from '../../assets/services/stars.png';
import userPic from '../../assets/services/user-pic.png';
import numberOne from '../../assets/services/number-one.png';
import {
  businessService,
  helpedService,
  adsService,
  processService,
} from '../../constants/services';
import Pricing from '../../components/pricing';
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
  AdsItemWrapper,
  ServiceItem,
  ServiceItemTitle,
  ProductContainer,
  AdsContainer,
  ProcessContainer,
  ProductItem,
  ProductItemTitle,
  AdsItemTitle,
  ProductItemDescription,
  AdsItemDescription,
  AdsItem, 
  ProcessItemWrapper,
  ProcessItemImage,
  ProcessItemContent,
  ProcessItem,
  ProcessItemTitle,
  ProcessItemDescription,
  Quote,
  QuoteMessage,
  QuoteTag,
  TestimonyContainer,
  TestimonyContainerImage,
  TestimonyItemWrapper,
  TestimonyItemLabel,
  TestimonyItemUser,
  TestimonyItemUserContent,
  TestimonyItemUserTitle,
  TestimonyItemUserDescription,
  ProductItemImg,
  PortfolioCarouselContainer,
  PortfolioTitle,
} from './forBusiness.style';
import {Container} from '../../styles/global.style';
import ResponsiveCarouselArrows from '../../components/responsive-carousel-arrows';

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

  const commercials = adsService.map((item) => {
    return (
      <AdsItem key={item.name}>
        <AdsItemTitle>{item.name}</AdsItemTitle>
        <AdsItemDescription>{item.descript}</AdsItemDescription>
        <iframe
          width="560"
          height="315"
          src={item.video}
          title={item.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AdsItem>
    );
  });

  const process = processService.map((item) => {
    return (
      <ProcessItem key={item.name}>
        <img src={item.image} alt={item.name} />
        <div>
          <ProcessItemTitle>{item.name}</ProcessItemTitle>
          <ProcessItemDescription>{item.descript}</ProcessItemDescription>
        </div>
      </ProcessItem>
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
      <AdsContainer>
        <Title>Ads &amp; Commercials Created</Title>
        <AdsItemWrapper>{commercials}</AdsItemWrapper>
      </AdsContainer>
      <ProcessContainer>
        <Title>Our Local Process</Title>
        <ProcessItemWrapper>
          <ProcessItemImage
            src={processPeople}
            alt="people processing"
          />
          <ProcessItemContent>
            <Description>
              Every project is designed to the specifications of our clients! We
              ensure the best practices for the most efficient results.
            </Description>
            {process}
          </ProcessItemContent>
        </ProcessItemWrapper>
        <ButtonField color="primary" onClick={sendToPricing}>
          Start Today!
        </ButtonField>
      </ProcessContainer>
      <TestimonyContainer>
        <TestimonyContainerImage
          src={testimony}
          alt="granbury website"
        />
        <TestimonyItemWrapper>
          <Title>Customer Testimonial</Title>
          <TestimonyItemLabel>
            Great Work Start to Finish!
          </TestimonyItemLabel>
          <img src={stars} alt="5 stars" />
          <Description>
            I love working with ABS becuase they are extremely knowledgable,
            thorough and took the time to understand my market. Now they help my
            business with SEO &amp; Social Media Marketing too. Thanks for the
            website upgrade!
          </Description>
          <TestimonyItemUser>
            <img src={userPic} alt="user profile" />
            <TestimonyItemUserContent>
              <TestimonyItemUserTitle>Betsy Kruger</TestimonyItemUserTitle>
              <TestimonyItemUserDescription>
                Granbury Gardens
              </TestimonyItemUserDescription>
            </TestimonyItemUserContent>
          </TestimonyItemUser>
        </TestimonyItemWrapper>
      </TestimonyContainer>
      <Quote>
        <QuoteMessage>
          We&lsquo;re a local creative agency that uses design and code to solve
          problems.
        </QuoteMessage>
        <QuoteTag>- The ABS Team</QuoteTag>
      </Quote>
      <Pricing freeAccount={freeAccount}/>
      <div id="contact">
        <ContactUs />
      </div>
    </Container>
  );
};

export default ForBusiness;
