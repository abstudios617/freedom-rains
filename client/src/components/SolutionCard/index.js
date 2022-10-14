import React, { useState } from 'react';
import checkmark from '../../assets/pricing/checkmark.png';
import whiteCheckmark from '../../assets/pricing/checkmark-white.png';
import {
  PlanCardItem,
  PlanCardAmount,
  PlanCardItemSpecs,
  PlanCardMonthly,
  PlanCardMP,
  PlanCardMPContainer,
  PlanCardListItem,
} from '../plan-card/plan-card.styles';
import { 
  PlanYearly,
  PlanMonthly,
  PlanCardItemSol,
  PlanListSolName,
  PlanCardButton,
  PlanCardContainer
} from './solution-card.styles';
import { developmentFeaturesList } from '../../constants/pricing';

const SolutionCard = ({ solutionType, selectedPlan, setSelectedPlan, selectedDev, setSelectedDev, popularType, wholeItems }) => {
  const [planType, setPlanType] = useState('yearly');
  const switchPlanTypes = (type) => {
    setPlanType(type);
  };

  const switchSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const isSelectedPlan = (plan) => {
    return plan === selectedPlan; 
  };

  const switchSelectedDev = (plan) => {
    setSelectedDev(plan);
  };

  const isSelectedDev = (plan) => {
    return plan === selectedDev; 
  };

  const isPlanChanged = (timePlan, plan) => {
    if (plan === selectedPlan) {
      return timePlan === planType;
    } else {
      return false; 
    }
  };
 
  // e-commerce solution display

  if (solutionType === 'ecommerce') {
    const commerceDisplay = wholeItems.map((item) => {
      const { plan, amountYear, amountMonth, list} = item;
  
      const specs = list.map((prod) => {
        const { bullet } = prod;
    
        return (
          <PlanCardListItem
            key={solutionType}
            className={`${
              false && 'active'
            }`}
          >
            <img src={checkmark} alt="checkmark" />
            {bullet}
          </PlanCardListItem>
        );
      });
      
      return (
        <PlanCardItem
          key={plan}
          className={`${
            false && popularType
          }`}
        >
          {isSelectedPlan(plan) && (
            <PlanCardMPContainer>
              <PlanCardMP>Selected</PlanCardMP>
            </PlanCardMPContainer>
          )}
          <PlanCardButton
            key={plan}
            onClick={() => switchSelectedPlan(plan)}
            className={`${
              isSelectedPlan(plan) && 'selected'
            }`}
          >
            {plan}
          </PlanCardButton>
          <PlanCardMonthly
            className={`${
              false && 'active'
            }`}
          >
            <PlanCardAmount
              className={`${
                false && 'active'
              }`}
            >
              {isPlanChanged('yearly', plan) ? amountYear : amountMonth}
            </PlanCardAmount>
              /month
          </PlanCardMonthly>
          <div>
            <PlanYearly
              onClick={() => isSelectedPlan(plan) ? switchPlanTypes('yearly') : undefined}
              className={`${
                isPlanChanged('yearly', plan) && 'yearlyActive'
              }`}
            >
              Pay Yearly
            </PlanYearly>
            <PlanMonthly
              onClick={() => isSelectedPlan(plan) ? switchPlanTypes('monthly') : undefined}
              className={`${
                isPlanChanged('monthly', plan) && 'monthlyActive'
              }`}
            >
              Pay Monthly
            </PlanMonthly>
          </div>
          <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
        </PlanCardItem>
      );
    }); 
  
    return (
      <PlanCardContainer>
        {commerceDisplay}
      </PlanCardContainer>
      
    );
  }

  else if (solutionType === 'marketing') {
    // marketing solution display
    const marketingDisplay = wholeItems.map((item) => {
      const { plan, amountYear, amountMonth, list } = item;
    
      const [planType] = useState('yearly');

      const specs = list.map((prod) => {
        const { bullet } = prod;
    
        return (
          <PlanCardListItem
            key={bullet}
            className={`${
              false && 'active'
            }`}
          >
            <img src={checkmark} alt="checkmark" />
            {bullet}
          </PlanCardListItem>
        );
      });
      return (
        <PlanCardItem
          key={plan}
          className={`${
            false && popularType
          }`}
        >
          {isSelectedPlan(plan) && (
            <PlanCardMPContainer>
              <PlanCardMP>Selected</PlanCardMP>
            </PlanCardMPContainer>
          )}
          <PlanCardButton
            key={plan}
            onClick={() => switchSelectedPlan(plan)}
            className={`${
              isSelectedPlan(plan) && 'selected'
            }`}
          >
            {plan}
          </PlanCardButton>
          <PlanCardMonthly
            className={`${
              false && 'active'
            }`}
          >
            <PlanCardAmount
              className={`${
                false && 'active'
              }`}
            >
              {planType === 'yearly' ? amountYear : amountMonth}
            </PlanCardAmount>
              /year
          </PlanCardMonthly>
          <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
        </PlanCardItem>
      );
    });

    return (
      <PlanCardContainer>
        {marketingDisplay}
      </PlanCardContainer>
    );
    
  
    
  } else {
    // Development solution display

    const developmentDisplay = wholeItems.map((item) => {
      const body = item; 
      const developmentList = [body.uiDesigns, body.uxDesign, body.adminDashoard, body.analyticsDashboard, body.seoOptimization, body.iosStoreOptimization, body.onPageOptimization, body.chatBox, body.clothingDropshipping, body.satisfactionFuarantee];
      const specs = developmentList.map((prod, index) => {
        const bullet = developmentFeaturesList[index]; 
        return (
          <PlanListSolName
            key={bullet}
          >
            <img src={prod ? whiteCheckmark : checkmark} alt="checkmark" />
            {developmentFeaturesList[index]}
          </PlanListSolName>
        );
      });

      return (
        <PlanCardItemSol
          key={body.name}>
          {isSelectedDev(body.name) && (
            <PlanCardMPContainer>
              <PlanCardMP>Selected</PlanCardMP>
            </PlanCardMPContainer>
          )}
          <PlanCardButton
            key={body.name}
            onClick={() => switchSelectedDev(body.name)}
            className={`${
              isSelectedDev(body.name) && 'selected'
            }`}
          >
            {body.name}
          </PlanCardButton>
          <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
        </PlanCardItemSol>
      );
    });

    return (
      <PlanCardContainer>
        {developmentDisplay}
      </PlanCardContainer>
    );

    
  }
};

export default SolutionCard;
