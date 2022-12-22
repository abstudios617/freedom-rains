import React from 'react';
import { 
  PlanYearly,
  PlanMonthly,
} from './plan-type.styles';

const PlanType = ({ planType, setPlanType }) => {
  const switchPlanTypes = (type) => {
    setPlanType(type);
  };

  return (
    <div>
      <PlanYearly
        onClick={() => switchPlanTypes('yearly')}
        className={`${
          planType === 'yearly' && 'yearlyActive'
        }`}
      >
        Yearly
      </PlanYearly>
      <PlanMonthly
        onClick={() => switchPlanTypes('monthly')}
        className={`${
          planType === 'monthly' && 'monthlyActive'
        }`}
      >
        Monthly
      </PlanMonthly>
    </div>
  );
};

export default PlanType;
