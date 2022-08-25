import CouponFilter from '../components/coupon-filter';
import React from 'react';
import cvs from '../assets/stores/cvs.png';
import small_cvs from '../assets/small-stores/small_cvs.png';

export default {
  title: 'Lists/Coupons',
  component: CouponFilter,
  argTypes: {
    data: { control: false },
    hasCode: { control: false },
    store: { control: false },
  }
};

const Template = (args) => <CouponFilter {...args} />;

export const Coupons = Template.bind({});
const coupon = {
  code: 'CAREPASSAFF',
  endDate: '5-13-2024',
  hasCode: true,
  isEligible: true,
  ranking: 'Top Rated',
  title: 'Annual memberships for $40',
  type: 'discountCode',
};

const store = {
  name: 'CVS',
  url: 'https://www.cvs.com',
  image: cvs,
  small_img: small_cvs,
  priority: '16',
  referral: '',
  category: null,
  platform: 'store',
};

Coupons.args = {
  data: coupon,
  hasCode: coupon.hasCode,
  store: store,
};
