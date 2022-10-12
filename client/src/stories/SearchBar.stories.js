import React from 'react';
import SearchBar from '../components/search-bar';

export default {
  title: 'Header/Search',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Search = Template.bind({});
Search.args = {
  showSearch: true
};
