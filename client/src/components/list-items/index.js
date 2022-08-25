import React from 'react';
import { formatPrice, targetPage } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';
import { hpStoresConstant, hpCategoryConstant } from '../../constants/homepage';
import { imgServer } from '../../config';
import { 
  ItemImg,
  ItemName,
  ItemPic,
  Item,
  Container,
  ListItem,
  Title,
} from './listItem.styles';

const ListOfStores = ({ currentItems, listType, listTitle }) => {
  const goToSearch = (keyword) => {
    if (listType !== 'products'){
      targetPage(`search/${listType}/${keyword}`);
      addEvent({
        event: `${listType} item selected`,
        props: {
          action: 'Click',
          label: keyword,
        },
      });
    } else {
      targetPage(`shop/${keyword.product.id}`);
      addEvent({
        event: 'Product selected',
        props: {
          action: 'Click',
          label: keyword.product,
        },
      });
    }
  };

  const goToArcade = (game) => {
    targetPage(`arcade/${game.urlName}`);
    addEvent({
      event: 'Game item selected',
      props: {
        action: 'Click',
        label: game.name,
      },
    });
  };

  const itemUrl = (item) => {
    listType === 'games' ? goToArcade(item) : goToSearch(item);
  };

  const itemGrid = (item, index) => {
    let listImg;
    let listName;

    if ((listType !== 'games') && (listType !== 'products')) {
      const arrayType = listType === 'category' ? hpCategoryConstant : hpStoresConstant;

      const list = arrayType.filter((response) => {
        return response.name === item;
      })[0];

      listName = item;
      listImg = list ? list.image : '';
    }

    if (listType === 'products') {
      listImg = item.product.images[0];
      listName = item.unit_amount ? ('$' + formatPrice(item.unit_amount)) : ('$');
    }


    if (listType === 'games') {
      listImg = `${imgServer}${item.image}`;
      listName = item.name;
    }

    return (
      <Item key={index} onClick={() => itemUrl(item)}>
        <ItemPic>
          <ItemImg src={listImg} alt={listName} />
        </ItemPic>
        <ItemName>{listName}</ItemName>
      </Item>
    );
  };

  return (
    <Container>
      <Title>{ listTitle }</Title>
      <ListItem>
        {currentItems?.map((item, index) => {
          return itemGrid(item, index);
        })}
      </ListItem>
    </Container>
  );
};

export default ListOfStores;
