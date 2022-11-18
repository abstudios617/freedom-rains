import styled from 'styled-components';

export const ConfirmationBanner = styled.img`
  width: 100%;
  height: auto;
  margin-top: -80px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ConfirmationBannerMobile = styled.img`
  display: none;

  @media only screen and (max-width: 480px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const SummaryHeader = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;
  color: #BEC4CD;
`;

export const SummaryDetails = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #828A94;
  margin-bottom: 27px;

  span {
    margin-left: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
  }
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 480px) {
    overflow: scroll;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 92px;
  margin-right: 70px;

  @media only screen and (max-width: 480px) {
    margin-right: 13px;
  }
`;

export const ProdImg = styled.img`
  width: 92px;
  height: 92px;
  border: 1px solid #DEE1E5;
`;

export const ProdName = styled.span`
  height: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #3C4044;
  width: 92px;
`;

export const ProdQuantity = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  color: #7D7D7D;
  margin-top: 4px;
  margin-left: 22px;
`;

export const OrderDetailsButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 44px;
  background: #FFFFFF;
  border: 1px solid #1988FF;
  border-radius: 6px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1988FF;
  margin-top: 45px;
`;

export const OrdersButton = styled(OrderDetailsButton)`
  margin-top: 29px;
  background: #1988FF;
  color: #FFFFFF;
  border: none;
`;

export const RelatedProducts = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #BEC4CD;
  margin-top: 160px;
  margin-bottom: 35px;
`;
