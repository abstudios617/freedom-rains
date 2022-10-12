import React from 'react';
import PlanCard from '../components/plan-card';
import { freePricing, pricing } from '../constants/pricing';


export default {
  title: 'Business/Packages',
  component: PlanCard,
  argTypes: {
    popularType: {
      options: ['pricePopular', 'marketPopular'],
      control: { type: 'select' },
    },
    packageType: {
      options: ['basic', 'popular'],
      control: { type: 'select' },
    },
    freeAccount: {
      control: { type: 'boolean' },
    },
    item: {
      control: false
    }
  },
};
  
const Template = (args) => {
  const account = args.packageType === 'basic' ? pricing[0] : args.item;
  const isFreeAccount = args.freeAccount ? freePricing[0] : account;
  
  return (
    <div style={{ marginTop: 80, marginLeft: 20 }}>
      <PlanCard 
        popularType={args.popularType}
        item={isFreeAccount}
      />
    </div>
  );
};
  
export const Packages = Template.bind({});
Packages.args = {
  popularType: 'pricePopular',
  item: pricing[2],
  packageType: 'popular',
  freeAccount: false,
};
