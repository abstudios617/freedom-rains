import React, { useState } from 'react';
import { 
  PriceItemWrapper,
  PriceTitle,
  PriceSubtitle,
  PriceHeading
} from '../pricing/pricing.styles';
import { 
  MarketTitle,
  MarketSubtitle,
  MarketHeading, 
} from '../marketing/marketing.styles';
import {
  SolutionButtonContainer,
  MarketingItemsContainer
} from './SolutionSection.styles';
import ButtonField from '../button-field';
import {
  DevelopTitle,
  DevelopSubTitle,
  DevelopHeading,
  DevelopCenter,
  DevelopContainer,
} from '../development/development.styles';
import SolutionCard from '../SolutionCard';
const SolutionSection = ({solutionItems, solutionType}) => {
  const [selectedPlan, setSelectedPlan ] = useState('Basic');
  const [selectedDev, setSelectedDev] = useState('Website'); 
  const [planType, setPlanType] = useState('yearly');

  const solutionGrid = () => {
    return (
      <SolutionCard
        key= {solutionType}
        solutionType = { solutionType }
        selectedPlan = { selectedPlan }
        setSelectedPlan = { setSelectedPlan }
        selectedDev = { selectedDev }
        setSelectedDev = { setSelectedDev }
        popularType = "pricePopular"
        wholeItems = {solutionItems}
        planType = {planType}
        setPlanType={setPlanType}
      />
    );
  };
  
  if (solutionType === 'ecommerce') {

    const goToCommercePackage = () => {
      switch(selectedPlan) {
      case 'Basic':
        planType === 'yearly' ? window.open('https://shopfreedom.io/products/basic-e-commerce-package-yearly') 
          : window.open('https://shopfreedom.io/products/basic-e-commerce-package-monthly');
        break;
      case 'Digital Package':
        planType === 'yearly' ? window.open('https://shopfreedom.io/products/digital-e-commerce-package-yearly')
          : window.open('https://shopfreedom.io/products/digital-e-commerce-package-monthly');
        break; 
      case 'Amazon Extension':
        planType === 'yearly' ? window.open('https://shopfreedom.io/products/amazon-extension-e-commerce-package-yearly')
          : window.open('https://shopfreedom.io/products/amazon-extension-e-commerce-package-monthly');
        break;
      case 'Enterprise':
        planType === 'yearly' ? window.open('https://shopfreedom.io/products/enterprise-e-commerce-package-yearly')
          : window.open('https://shopfreedom.io/products/enterprise-e-commerce-package-monthly');
        break; 
      default:
        // error page
        break; 
      }
    };
    
    
    // e-commerce solution section
    return (
      <div>
        <PriceHeading>
          <div>
            <PriceTitle>Simple, pricing for Everyone</PriceTitle>
            <PriceSubtitle>E-Commerce Solutions</PriceSubtitle>
          </div>
        </PriceHeading>
        <PriceItemWrapper> {solutionGrid()} </PriceItemWrapper>
        <SolutionButtonContainer>
          <ButtonField
            color={'greenPricing'}
            onClick={goToCommercePackage}
          >
            Start Today!
          </ButtonField>
        </SolutionButtonContainer>
      </div>
    );
  } else if (solutionType === 'marketing') {

    const goToMarketingPackage = () => {
      switch(selectedPlan) {
      case 'Basic':
        window.open('https://shopfreedom.io/products/basic-package');
        break;
      case 'Professional':
        window.open('https://shopfreedom.io/products/professional-package-yearly');
        break; 
      case 'Enterprise':
        window.open('https://shopfreedom.io/products/enterprise-package-yearly'); 
        break; 
      default:
        // error page
        break; 
      }
    };
    // marketing solution section
    return (
      <div>
        <MarketHeading>
          <div>
            <MarketTitle
              className="marketSolutionTitle">
              Appears On the Front Page of Google
            </MarketTitle>
            <MarketSubtitle className="marketSolutionSubTitle">Marketing Solutions</MarketSubtitle>
          </div>
        </MarketHeading>
        <MarketingItemsContainer>{ solutionGrid() }</MarketingItemsContainer>
        <SolutionButtonContainer>
          <ButtonField
            color={'greenPricing'}
            onClick={goToMarketingPackage}
          >
            Start Today!
          </ButtonField>
        </SolutionButtonContainer>
      </div>
    );
  } else {
    // development solution section
    return (
      <div>
        <DevelopHeading>
          <div>
            <DevelopTitle
              className="solDev">
              Get the right plan for your business
            </DevelopTitle>
            <DevelopSubTitle>Development Solutions</DevelopSubTitle>
          </div>
        </DevelopHeading>
        <DevelopContainer>
          <DevelopCenter>{solutionGrid()}</DevelopCenter>
        </DevelopContainer>
        <SolutionButtonContainer>
          <ButtonField
            color={'greenPricing'}
            onClick={'/forbusiness#contact'}
          >
            Contact Sales!
          </ButtonField>
        </SolutionButtonContainer>
      </div>
    );
  }
};

export default SolutionSection;
