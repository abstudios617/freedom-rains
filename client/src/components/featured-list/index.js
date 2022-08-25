import React from 'react';
import { targetPage } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';
import { 
  ImgContainer,
  ProductImage,
  ProductName,
  Product,
  ListProduct,
  CTA,
} from './featuredList.styles';

const FeaturedList = ({ currentItems }) => {
  const goToProductClass = (item) => {
    targetPage(`shop/${item.product.id}`);
    addEvent({
      event: 'Product selected',
      props: {
        action: 'Click',
        label: item.product,
      },
    });
  };

  const productGrid = (item) => {
    return (
      <Product key={item.id}>
        <ImgContainer>
          <ProductImage src={item.product.images[0]} alt={item.product.name} />
        </ImgContainer>
        <ProductName>{item.product.name}</ProductName>
        <CTA onClick={() => goToProductClass(item)}>
          Learn More
        </CTA>
      </Product>
    );
  };

  return (
    <ListProduct>
      {currentItems?.map((item) => {
        return productGrid(item);
      })}
    </ListProduct>
  );
};

export default FeaturedList;
