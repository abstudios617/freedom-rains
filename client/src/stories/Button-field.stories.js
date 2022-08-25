import React from 'react';
import ButtonField from '../components/button-field/index.js';

export default {
  title: 'Fields/Buttons',
  component: ButtonField,
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'red',
        'green',
        'black',
        'allWhite',
        'pink',
        'more',
        'fav',
        'started',
        'darkStarted',
        'yellow',
      ],
      control: { type: 'select' },
    },
    icons: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['normal', 'small', 'large'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  const iconBtn = args.icons ? `icons ${args.color}` : args.color;
  const smallBtn = args.size === 'small' ? `small ${iconBtn}` : iconBtn;
  const allBtn = args.size === 'large' ? `large ${iconBtn}` : smallBtn;

  return <ButtonField color={allBtn}>{args.content}</ButtonField>;
};

export const Buttons = Template.bind({});
Buttons.args = {
  content: 'Button Text',
  color: 'primary',
  size: 'normal',
  icons: false,
};
