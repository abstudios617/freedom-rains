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
      />
    );
  };
  
  if (solutionType === 'ecommerce') {

    const goToCommercePackage = () => {
      switch(selectedPlan) {
      case 'Basic':
        window.open('');
        break;
      case 'Digital Package':
        window.open('');
        break; 
      case 'Amazon Extension':
        window.open('');
        break;
      case 'Enterprise':
        window.open(''); 
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
        window.open('');
        break;
      case 'Professional':
        window.open('');
        break; 
      case 'Enterprise':
        window.open(''); 
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
