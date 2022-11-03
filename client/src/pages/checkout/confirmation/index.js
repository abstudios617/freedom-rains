import React from 'react';
import { Container } from '../../../styles/global.style';
import { 
  ConfirmationBanner,
  ConfirmationBannerMobile,
  Summary,
  SummaryHeader,
  SummaryDetails,
  ProductRow,
  Product,
  ProdImg,
  ProdName,
  ProdQuantity,
  OrderDetailsButton,
  OrdersButton,
  RelatedProducts,
} from './confirmation.styles';
import ListOfProducts from '../../../components/list-of-products';
import confirmation from '../../../assets/order_confirmation/confirmation.png';
import confirmationMobile from '../../../assets/order_confirmation/confirmationMobile.png';
import ad1 from '../../../assets/ads/ad1.png';

const Confirmation = () => {
  return (
    <Container>
      <ConfirmationBanner src={confirmation} alt="order confirmation" />
      <ConfirmationBannerMobile src={confirmationMobile} alt="order confirmation" />
      <Summary>
        <SummaryHeader>Order Summary</SummaryHeader>
        <SummaryDetails>
          Order Code: 
          <span>#123456789</span>
        </SummaryDetails>
        <SummaryDetails>
          Estimated Delivery:
          <span>Friday, May 26</span>
        </SummaryDetails>
        <SummaryDetails>
          Shipping to:
          <span>1312 bulabula st, halo city, ohio  483210  </span>
        </SummaryDetails>
        <ProductRow>
          {Array(5).fill(0).map((i) => (
            <Product index={i} key={i}>
              <ProdImg src={ad1} alt="product" />
              <ProdName>Product Name</ProdName>
              <ProdQuantity>Qty: 1</ProdQuantity>
            </Product>
          ))}
        </ProductRow>
        <OrderDetailsButton>Order Details</OrderDetailsButton>
        <OrdersButton>My Orders</OrdersButton>
        <RelatedProducts>You May Also Like</RelatedProducts>
        <ListOfProducts search={false} />
      </Summary>
    </Container>
  );
};

export default Confirmation;
