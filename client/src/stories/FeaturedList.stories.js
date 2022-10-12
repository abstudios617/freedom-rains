import React from 'react';
import FeaturedList from '../components/featured-list';

export default {
  title: 'Lists/Features',
  component: FeaturedList,
  argTypes: {
    currentItems: {
      control: false
    },
  },
};

const Template = (args) => <FeaturedList {...args} />;

export const Features = Template.bind({});

const data = [
  {
    category: 'vegan beauty',
    color: 'yellow, white ',
    description: 'Sister-owned company that creates skin care with minimal ingredients in powerful combinations. #sisterowned #skincare #facecare #cruelty-free  #vegan #CleanIngredients  #plantbased #blackowned #womenowned #local  #dailyfacecare #pHbalance #moisture ',
    id: 'prod_LNnAyp3USS4Wi1',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xSkZnZXVGaVNYMGthdGhPfGZsX2xpdmVfVTdHQUFpVjRzczdkQjhYNXdvNWkyMGdY00oycEslDY',
    link: 'https://brownandcoconut.com/collections/all/products/balancing-cleanser?variant=37367327817913',
    name: 'Balancing Cleanser',
    platform: 'black',
    price: '32.00',
    priority: '1',
    size: '4oz glass bottle ',
    store: 'Brown and Coconut',
  }
];

Features.args = {
  currentItems: data,
};
