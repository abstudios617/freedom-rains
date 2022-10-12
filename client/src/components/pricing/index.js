import React, { useState } from 'react';
import { pricing, freePricing } from '../../constants/pricing';
import { 
  PriceItemWrapper,
  PriceTitle,
  PriceSubtitle,
  PriceHeading
} from './pricing.styles';
import PlanType from '../plan-type';
import PlanCard from '../plan-card';

const Pricing = ({freeAccount}) => {
  const [planType, setPlanType] = useState('yearly');
  const accountType = freeAccount ? freePricing : pricing;

  const priceGrid = accountType.map((item) => {
    return (
      <PlanCard
        key={ item.plan }
        item={ item }
        popularType="pricePopular"
        planType={ planType }
      />
    );
  });

  return (
    <div id="pricing">
      <PriceHeading>
        <div>
          <PriceTitle>Simple, pricing for Everyone</PriceTitle>
          <PriceSubtitle>E-Commerce Solutions</PriceSubtitle>
        </div>
        <PlanType planType={ planType }  setPlanType={ setPlanType } />
      </PriceHeading>
      <PriceItemWrapper>{ priceGrid }</PriceItemWrapper>
    </div>
  );
};

export default Pricing;
