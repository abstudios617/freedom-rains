import React from 'react';
import ProductFilter from '../components/product-filter';

export default {
  title: 'Filters/Search Filter',
  component: ProductFilter,
  argTypes: {
    origItems: { control: false },
    changeableItems: { control: false },
    setChangeableItems: { control: false },
    setItemOffset: { control: false },
    setForcePageNum: { control: false },
  }
};

const Template = (args) => <ProductFilter {...args} />;

const data = [
  {
    category: 'cleaning',
    description: 'Make every home cleaning job safe and effective. All Purpose Cleaner is made with a special blend of all-natural and non-toxic ingredients. You can use it on all washable surfaces that can be found in the kitchen, bath, and throughout your home.',
    id: 'prod_L014z6EmbpvU2o',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xSkZnZXVGaVNYMGthdGhPfGZsX2xpdmVfaXlyYVFqZWZIQ09vS3gzeUpMVWcxSGV3004wKQVxj6',
    link: 'https://buysimplynatural.com/product/all-purpose-cleaner/',
    name: 'All Purpose Cleaner',
    platform: 'local',
    price: '23.95',
    priority: '16',
    store: 'simply natural',
  },
  {
    category: 'home',
    color: 'gray',
    description: 'Shower Caddy Keep your soap, shampoo, razors, and more, neatly. Made of durable steel and height-adjustable, Shower Caddy is perfect for any bathroom and with any decor scheme.',
    id: 'prod_KzjgH3jlqLS3h9',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xSkZnZXVGaVNYMGthdGhPfGZsX2xpdmVfeHhaODYwa3lqTnNkak5BUjI2bWthYjQy00vf3BwtYG',
    link: 'https://organizemeusa.com/shop/shower-caddy-adjustable-4-shelf-bathroom-storage-system/',
    name: 'Shower Caddy – Adjustable 4-Shelf Bathroom Storage System',
    platform: 'local',
    price: '29.95',
    priority: '12',
    store: 'organize me',
  },
  {
    category: 'socks',
    description: '"NOT COMPLIANT" Socks by - Deitrix Art Project',
    id: 'prod_KbgeIP5R3Bkj5I',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xSkZnZXVGaVNYMGthdGhPfGZsX2xpdmVfcG9za1FIZ0l3YlpYNTc0cmQwcGJkcDMw00gNWvE6kJ',
    link: 'https://my-store-thedeitrixartproject.creator-spring.com/listing/not-compliant?product=636',
    name: 'No Complaint Crew Socks',
    platform: 'black',
    price: '21.99',
    priority: '71',
    store: 'deitrix art project',
  }
];

const setChangeableItems = () => {};
const setItemOffset = () => {};
const setForcePageNum = () => {};

export const SearchFilter = Template.bind({});
SearchFilter.args = {
  origItems: data,
  changeableItems: data,
  setChangeableItems: setChangeableItems,
  setItemOffset: setItemOffset,
  setForcePageNum: setForcePageNum
};

