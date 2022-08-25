import Ad from '../components/ad/index';
import React from 'react';
 
export default {
  title: 'Ads/With No Image',
  component: Ad,
};

const Template = (args) => <Ad {...args} />;

export const WithNoImage = Template.bind({});

WithNoImage.args = {
  btnColor: 'black',
  adText: 'Invest. Earn Equity. Build The Future.',
  btnText: 'Invest In Us',
  url: 'https://netcapital.com/companies/above-beyond',
};
