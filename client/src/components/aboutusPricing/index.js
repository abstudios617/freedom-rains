import React, { useState } from 'react';
import { pricing, freePricing, marketingPrices, developmentFeatures } from '../../constants/pricing';
import { 
  PriceTitle,
  PriceHeading
} from './aboutusPricing.styles';
import SolutionType from '../solution-type';
import SolutionSection from '../SolutionSection';

const AboutUsPricing = ({freeAccount}) => {
  const accountType = freeAccount ? freePricing : pricing;
  const [solutionType, setSolutionType] = useState('ecommerce');
  const solutionItems = (solutionType === 'ecommerce') ? accountType : (solutionType === 'marketing') ? marketingPrices : developmentFeatures;

  return (
    <div id="pricing">
      <PriceHeading>
        <PriceTitle>Pricing</PriceTitle>
        <SolutionType solutionType={ solutionType } setSolutionType={ setSolutionType }></SolutionType>
      </PriceHeading>
      <SolutionSection solutionItems= {solutionItems} solutionType = {solutionType} ></SolutionSection>
    </div>
  );
};

export default AboutUsPricing;
