import React, { useState } from 'react';
import Pricing from '../../components/pricing';
import Marketing from '../../components/marketing';
import Development from '../../components/development';
import { pricingConnect, pricingPackage } from '../../constants/pricing';
import downArrow from '../../assets/pricing/down-arrow.png';
import ButtonField from '../../components/button-field';
import { targetPage } from '../../utils/index';
import { 
  PackagesSection,
  Packages,
  PackagesName,
  PackagesContent,
  PackagesArrow,
  PackagesTitle,
  FeaturedSection,
  FeaturedItem,
  FeaturedName,
  FeaturedContent,
  FeaturedSpecial,
  FeaturedPopular,
  HeaderSection,
  HeaderContent,
  HeaderTitle,
  HeaderDescription
} from './pricing.style';
import {Container, Title} from '../../styles/global.style';

const PricingPage = () => {
  const [freeAccount, setFreeAccount] = useState(false);
  const packages = pricingPackage.map((item) => {
    const { image, name, content } = item;

    return (
      <div key={name}>
        <img src={image} alt={name} />
        <PackagesName>
          {name}
        </PackagesName>
        <PackagesContent>
          {content}
        </PackagesContent>
      </div>
    );
  });

  const featured = pricingConnect.map((item) => {
    const { name, content, image, popular } = item;

    return (
      <FeaturedItem key={name} className={popular && 'featuredBlank'}>
        <FeaturedSpecial className={popular && 'featuredBasic'}>
          <img src={image} alt={name} />
          { popular && (
            <FeaturedPopular>
              Most Popular
            </FeaturedPopular>
          )}
        </FeaturedSpecial>
        <FeaturedName>
          {name}
        </FeaturedName>
        <FeaturedContent>
          {content}
        </FeaturedContent>
        <ButtonField color="primary" onClick={() => targetPage('contact')}>
          Connect now
        </ButtonField>
      </FeaturedItem>
    );
  });

  const sendToPricing = (e) => {
    e.preventDefault();
    setFreeAccount(true);
    window.location.replace('/pricing#pricing');
  };

  return (
    <Container>
      <HeaderSection>
        <HeaderContent>
          <div>
            <HeaderTitle>
              The Right Package For Every Business
            </HeaderTitle>
            <HeaderDescription>
              Let us handle all your marketing and ecommerce needs, so you can focus on running your business. 
            </HeaderDescription>
          </div>
          <ButtonField color="darkStarted" onClick={sendToPricing}>
            Get Started for Free
          </ButtonField>
        </HeaderContent>
      </HeaderSection>
      <PackagesSection>
        <Title>
          <PackagesTitle>
            <PackagesArrow src={downArrow} alt="down arrow" />
            <span>Select a Package Below</span>
            <PackagesArrow src={downArrow} alt="down arrow" />
          </PackagesTitle>
        </Title>
        <Packages>
          {packages}
        </Packages>
      </PackagesSection>
      <Pricing freeAccount={freeAccount}/>
      <Marketing />
      <FeaturedSection>
        {featured}
      </FeaturedSection>
      <Development />
    </Container>
  );
};


export default PricingPage;
