import React from 'react';
import PlanType from '../components/plan-type';

export default {
  title: 'Business/Date Toggle',
  component: PlanType,
  argTypes: {
    planType: {
      options: ['yearly', 'monthly'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => <PlanType {...args} />;

export const DateToggle = Template.bind({});
DateToggle.args = {
  planType: 'yearly'
};
