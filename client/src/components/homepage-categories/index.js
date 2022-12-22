import React, { useState } from 'react';
import { 
  ImgContainer,
  ProductImage,
  ProductName,
  ProductContainer,
  ListProduct,
  ListItem,
  Title,
  View,
  GradientContainer,
  SectionText,
} from './homepageCategories.styles';
import {categories} from '../../constants/categories';
import { targetPage } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';

const HomepageCategories = () => {
  const [currentItems, setCurrentItems] = useState(categories?.slice(0, 5));
  const [viewAll, setViewAll] = useState(false);

  const showAllCategories = () => {
    setCurrentItems(categories);
    setViewAll(true);
  };

  const condenseCategories = () => {
    setCurrentItems(categories?.slice(0, 5));
    setViewAll(false);
  };

  const goToSearch = (item) => {
    const listType = 'category';
    targetPage(`search/${listType}/${item}`);
    addEvent({
      event: `${listType} item selected`,
      props: {
        action: 'Click',
      },
    });
  };

  const productGrid = (item) => {
    return (
      <ProductContainer
        key={item.id}
        onClick={() => goToSearch(item.value)}
      >
        <ImgContainer>
          <ProductImage src={item.image} alt={item.name} />
        </ImgContainer>
        <GradientContainer/>
        <ProductName>{item.name}</ProductName>
      </ProductContainer>
    );
  };

  return (
    <ListProduct>
      <SectionText>
        <Title>Categories</Title>
        {!viewAll ? (
          <View onClick={showAllCategories}>View All</View>
        ) : (
          <View onClick={condenseCategories}>Hide</View>
        )}
      </SectionText>
      <ListItem>
        {currentItems?.map((item) => {
          return productGrid(item);
        })}
      </ListItem>
    </ListProduct>
  );
};

export default HomepageCategories;
