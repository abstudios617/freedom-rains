import React, { useState } from 'react';
import { pricing, freePricing, marketingPrices, developmentFeatures } from '../../constants/pricing';
import { 
  PriceItemWrapper,
  PriceTitle,
  PriceHeading
} from './aboutusPricing.styles';
import SolutionType from '../solution-type';
import ButtonField from '../button-field';
import SolutionCard from '../SolutionCard';

const Pricing = ({freeAccount}) => {
  const accountType = freeAccount ? freePricing : pricing;
  const [solutionType, setSolutionType] = useState('ecommerce');
  const solutionItems = (solutionType === 'ecommerce') ? accountType : (solutionType === 'marketing') ? marketingPrices : developmentFeatures;
  const solutionGrid = solutionItems.map((item) => {
    return (
      <SolutionCard
        key={item}
        item={ item }
        solutionType = { solutionType }
      />
    );
  });

  return (
    <div id="pricing">
      <PriceHeading>
        <PriceTitle>Pricing</PriceTitle>
        <SolutionType solutionType={ solutionType } setSolutionType={ setSolutionType }></SolutionType>
      </PriceHeading>
      <PriceItemWrapper>{ solutionGrid }</PriceItemWrapper>
      <ButtonField
        color={'started'}
        onClick={'/pricing'}
      >
        Get Started
      </ButtonField>
    </div>
  );
};

export default Pricing;
