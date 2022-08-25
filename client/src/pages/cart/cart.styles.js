import styled from 'styled-components';

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -30px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #3C4044;

  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

export const CartOptions = styled.div`
  margin-top: 32px;
  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #828A94;
    margin-left: 30px;
    cursor: pointer;

    &.first {
      margin-left: 0px;
    }
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  width: 141px;
  height: 141px;
  border: 1px solid #DEE1E5;
`;

export const ButtonRow = styled.div`
  display: flex-;
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 28px;
`;

export const CouponButton = styled.button`
  margin-left: 21px;
  width: 99px;
  height: 32px;
  background: #1988FF;
  border: 1px solid #1988FF;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  cursor: pointer;
`;

export const SaveForLaterButton = styled.div`
  width: 156px;
  height: 32px;
  border: 1px solid #1988FF;
  border-radius: 6px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #1988FF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 21px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 815px;
  margin-top: 48px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductName = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #3C4044;
  margin-left: 11px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -300px;
`;

export const ExtraDetails = styled.ul`
  list-style-type: none;
  margin-left: -28px;

  li {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #828282;
  }
`;

export const Delete = styled.img`
  cursor: pointer;
  margin-top: 0px;
  width: 16px;
  height: 18px;
  margin-left: 400px;
  margin-top: -20px;
`;

export const SubtotalDiv = styled.div`
  width: 300px;
  height: 82px;
  background: #1988FF;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: -200px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    margin-left: 31px;
    margin-top: 5px;
    color: #FFFFFF;
  }
`;

export const Total = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #FFFFFF;
  float: right;
  margin-left: auto;
  margin-right: 19px;
  margin-top: 10px;
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutButton = styled.button`
  width: 300px;
  height: 58px;
  background: #8EC90E;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: -15px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Price = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #3C4044;
  float: right;
  margin-left: auto;
`;
