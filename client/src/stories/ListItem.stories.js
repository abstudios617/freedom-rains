import React from 'react';
import ListItems from '../components/list-items';

export default {
  title: 'Lists/Items',
  component: ListItems,
  argTypes: {
    currentItems: { control: false },
    listType: {
      options: ['stores', 'games', 'category'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => {
  const searchable = args.listType === 'stores' ? ['a bella mia'] : ['beard'];
  const games = [{
    name: 'Fast Driver',
    link: '/games/Fast_Driver/index.html',
    image: '/games/Fast_Driver/icons/icon-114.png',
    priority: '5',
    rules:
      'Use your mouse or the arrow keys to move the car right or left. Avoid the obstacles including the moving cars and roadblocks. You Have 3 lives to drive as far as you can to get the highest score!',
  }];
  const item = args.listType === 'games' ? games : searchable;

  return (
    <ListItems
      currentItems={ item }
      listType={ args.listType }
      listTitle={ args.listTitle }
    />
  );
};

export const Items = Template.bind({});
Items.args = {
  listType: 'stores',
  listTitle: 'A title goes here',
  currentItems: ['a bella mia'],
};
