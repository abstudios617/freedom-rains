import React from 'react';
import {Container, Left, Right, Section} from './categories.style';
import Square from '@mui/icons-material/Square';

const Categories = () => {
  
  return (
    <Container>
      <Left>
        <p><Square fontSize="small" sx={{ color: 'white' }}/>Buy Black</p>
        <p><Square fontSize="small" sx={{ color: 'white' }}/> Buy Latin</p>
        <p><Square fontSize="small" sx={{ color: 'white' }}/> Shop Local</p>
        <p><Square fontSize="small" sx={{ color: 'white' }}/> Shop Ecofriendly</p>
      </Left>
      <hr/>
      <Right>
        <Section>
          <p>Appliances </p>
          <p>Arts, Crafts & Sewing </p>
          <p>Automotive </p>
          <p>Baby Products</p>
          <p>Beauty & Personal Care</p> 
          <p>Cell Phones & Accessories </p>
          <p>Clothing </p>
        </Section>
        <Section>
          <p>Electronics</p> 
          <p>Grocery</p>
          <p>Handbags & Wallets</p> 
          <p>Luggage</p> 
          <p>Health & Wellness</p> 
          <p>Home</p>
        </Section>
        <Section>
          <p>Furniture</p> 
          <p>Household Supplies </p>
          <p>Jewellery</p> 
          <p>Office Products</p> 
          <p>Patio, Lawn & Garden </p>
          <p>Pet Supplies</p>
        </Section>
        <Section>
          <p>Shoes </p>
          <p>Sports </p>
          <p>Outdoors </p>
          <p>Tools & Home Improvement </p>
          <p>Toys & Games </p>
          <p>Flowers & Plants</p>
        </Section>
      </Right>
    </Container>
  );
};

export default Categories;
