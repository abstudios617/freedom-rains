import React, { useState } from 'react';
import checkmark from '../../assets/pricing/checkmark.png';
import whiteCheckmark from '../../assets/pricing/checkmark-white.png';
import {
  PlanCardItem,
  PlanCardAmount,
  PlanCardItemSpecs,
  PlanCardMonthly,
  PlanCardPlan,
  PlanCardMP,
  PlanCardMPContainer,
  PlanCardListItem,
} from '../plan-card/plan-card.styles';
import PlanType from '../plan-type';
import { developmentFeatures, developmentFeaturesList } from '../../constants/pricing';

const SolutionCard = ({ item, solutionType }) => {
  if (solutionType === 'ecommerce') {
    const { plan, popular, amountYear, amountMonth, list} = item;
    
    const [planType, setPlanType] = useState('yearly');

    const specs = list.map((prod) => {
      const { bullet } = prod;
  
      return (
        <PlanCardListItem
          key={bullet}
          className={`${
            popular && 'active'
          }`}
        >
          <img src={popular ? whiteCheckmark : checkmark} alt="checkmark" />
          {bullet}
        </PlanCardListItem>
      );
    });
  
    return (
      <PlanCardItem
        key={plan}
      >
        {popular && (
          <PlanCardMPContainer>
            <PlanCardMP>Most Popular</PlanCardMP>
          </PlanCardMPContainer>
        )}
        <PlanCardMonthly
          className={`${
            popular && 'active'
          }`}
        >
          <PlanCardAmount
            className={`${
              popular && 'active'
            }`}
          >
            {planType === 'yearly' ? amountYear : amountMonth}
          </PlanCardAmount>
            /month
        </PlanCardMonthly>x
        <PlanCardPlan>{plan}</PlanCardPlan>
        <PlanType planType={ planType }  setPlanType={ setPlanType } />
        <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
      </PlanCardItem>
    );
  } else if (solutionType === 'marketing') {
    const { plan, popular, amountYear, amountMonth, list } = item;
    
    const [planType] = useState('yearly');

    const specs = list.map((prod) => {
      const { bullet } = prod;
  
      return (
        <PlanCardListItem
          key={bullet}
          className={`${
            popular && 'active'
          }`}
        >
          <img src={popular ? whiteCheckmark : checkmark} alt="checkmark" />
          {bullet}
        </PlanCardListItem>
      );
    });
  
    return (
      <PlanCardItem
        key={plan}
      >
        {popular && (
          <PlanCardMPContainer>
            <PlanCardMP>Most Popular</PlanCardMP>
          </PlanCardMPContainer>
        )}
        <PlanCardMonthly
          className={`${
            popular && 'active'
          }`}
        >
          <PlanCardAmount
            className={`${
              popular && 'active'
            }`}
          >
            {planType === 'yearly' ? amountYear : amountMonth}
          </PlanCardAmount>
            /month
        </PlanCardMonthly>x
        <PlanCardPlan>{plan}</PlanCardPlan>
        <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
      </PlanCardItem>
    );
  } else {
    const { name, uiDesigns, uxDesigns, adminDashoard, analyticsDashboard, seoOptimization, iosStoreOptimization, onPageOptimization, chatBox, clothingDropshipping, satisfactionFuarantee } = developmentFeatures;
    const developmentList = [uiDesigns, uxDesigns, adminDashoard, analyticsDashboard, seoOptimization, iosStoreOptimization, onPageOptimization, chatBox, clothingDropshipping, satisfactionFuarantee];

    const specs = developmentList.map((prod, index) => {
      const { bullet } = developmentFeaturesList[index];

  
      return (
        <PlanCardListItem
          key={bullet}
        >
          <img src={prod ? whiteCheckmark : checkmark} alt="checkmark" />
          {bullet}
        </PlanCardListItem>
      );
    });

    return (
      <PlanCardItem>
        <PlanCardPlan>{name}</PlanCardPlan>
        <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
      </PlanCardItem>
    );
  }
};

export default SolutionCard;
