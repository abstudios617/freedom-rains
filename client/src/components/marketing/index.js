import React, { useState } from 'react';
import { marketingPrices } from '../../constants/pricing';
import { 
  MarketItemWrapper,
  MarketTitle,
  MarketSubtitle,
  MarketHeading, 
} from './marketing.styles';
import PlanType from '../plan-type';
import PlanCard from '../plan-card';

const Marketing = () => {
  const [planType, setPlanType] = useState('yearly');

  const priceGrid = marketingPrices.map((item) => {
    return (
      <PlanCard
        key={ item.plan }
        item={ item }
        popularType="marketPopular"
        planType={ planType }
      />
    );
  });

  return (
    <div id="marketing">
      <MarketHeading>
        <div>
          <MarketTitle>
            Appears On the Front Page of Google
          </MarketTitle>
          <MarketSubtitle>Marketing Solutions</MarketSubtitle>
        </div>
        <PlanType planType={ planType } setPlanType={ setPlanType } />
      </MarketHeading>
      <MarketItemWrapper>{priceGrid}</MarketItemWrapper>
    </div>
  );
};

export default Marketing;
