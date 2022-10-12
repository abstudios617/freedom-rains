import React from 'react';
import DropDown from '../components/dropdown';

export default {
  title: 'Fields/Dropdown Component',
  component: DropDown,
  argTypes: {
    label: { control: 'text' },
    list: { control: false },
  }
};

const Template = (args) => <DropDown {...args} />;

export const DropdownComponent = Template.bind({});
const items = ['gaming', 'home improvement', 'beauty'];
const listItems = items.map(response => {
  return (
    <option key={response} value={response}>
      {response}
    </option>
  );
});

DropdownComponent.args = {
  label: 'What Industry are you in?',
  list: listItems,
};
