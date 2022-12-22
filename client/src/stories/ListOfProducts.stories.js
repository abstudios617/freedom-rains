import React from 'react';
import ListOfProducts from '../components/list-of-products';

export default {
  title: 'Lists/Products',
  component: ListOfProducts,
  argTypes: {
    currentItems: {
      control: false
    },
    search: {
      control: { type: 'boolean' }
    },
    platform: {
      options: ['black', 'local'],
      control: { type: 'select' }
    }
  },
};

const blackData = [
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

const localData = [
  {
    category: 'vegan beauty',
    color: 'teal',
    description: 'This honey-like gel shampoo purifies hair and scalp without stripping your hair of natural oils. Infused with Aloe, Honey and Willowbark Extract #vegan #colorfree #cruelty-free #womenowned #blackowned #shampoo',
    id: 'prod_LNppGm90TQWVgF',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xSkZnZXVGaVNYMGthdGhPfGZsX2xpdmVfNDlmNHVPa0k4clU0WWE0eTgzTGRBOWU4006YzWZPjw',
    link: 'https://tphbytaraji.com/collections/bestseller/products/honey-fresh',
    name: 'Honey Fresh: a clarifying shampoo with moisture',
    platform: 'local',
    price: '9.99',
    priority: '1',
    size: '12 fl. oz',
    store: 'TPH By Taraji',
  }
];

const Template = (args) => {
  const dataItem = args.platform === 'black' ? blackData : localData;

  return (
    <ListOfProducts
      currentItems={dataItem}
      search={args.search}
    />
  );
};

export const Products = Template.bind({});
Products.args = {
  platform: 'black',
  search: false,
  currentItems: blackData,
};
