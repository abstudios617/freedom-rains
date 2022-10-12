import React from 'react';
import checkmark from '../../assets/pricing/checkmark.png';
import whiteCheckmark from '../../assets/pricing/checkmark-white.png';
import {
  PlanCardItem,
  PlanCardAmount,
  PlanCardItemSpecs,
  PlanCardMonthly,
  PlanCardPlan,
  PlanCardBtn,
  PlanCardMP,
  PlanCardMPContainer,
  PlanCardDescription,
  PlanCardListItem,
} from './plan-card.styles';
import ButtonField from '../button-field';

const PlanCard = ({ item, popularType, planType }) => {
  const { plan, popular, amountYear, amountMonth, description, list, urlYear, urlMonth } = item;

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

  const productPage = () => {
    const productLink = planType === 'yearly' ? urlYear : urlMonth;

    window.open(productLink);
  };

  return (
    <PlanCardItem
      key={plan}
      className={`${
        popular && popularType
      }`}
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
      </PlanCardMonthly>
      <PlanCardPlan>{plan}</PlanCardPlan>
      { description && (
        <PlanCardDescription
          className={`${
            popular && 'active'
          }`}
        >
          {description}
        </PlanCardDescription>
      )}
      <PlanCardItemSpecs>{specs}</PlanCardItemSpecs>
      <PlanCardBtn>
        <ButtonField
          color={popular ? 'darkStarted' : 'started'}
          onClick={productPage}
        >
            Get Started
        </ButtonField>
      </PlanCardBtn>
    </PlanCardItem>
  );
};

export default PlanCard;
