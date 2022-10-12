import Ad from '../components/ad/index';
import React from 'react';
import { adsConstant } from '../constants/ads';
 
export default {
  title: 'Ads/With Image',
  component: Ad,
  argTypes: {
    platform: {
      options: ['coupons', 'arcade', 'rotate'],
      control: { type: 'select' },
    },
    page: {
      options: ['Coupons', 'Arcade'],
      control: { type: 'select' },
    },
    priority: {
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      control: { type: 'select' },
    },
    ad: {
      control: false
    }
  },
};

const Template = (args) => <Ad {...args} />;

export const WithImage = Template.bind({});

WithImage.args = {
  platform: 'coupons',
  priority: '1',
  height: '250',
  page: 'Coupons',
  ad: adsConstant,
};
