import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const InfoSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 10px 16px;
  gap: 5px;
  width: 611px;
  background: #FFFFFF;
  box-shadow: 2px 2px 7px rgba(159, 159, 159, 0.25);
  border-radius: 6px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  &.dropDown {
    margin-left: 12px;
  }

  &.addNewCard {
    margin-left: 220px;
  }

  &.payment {
    margin-left: 12px;
    margin-top: -4px;
  }

  &.plus {
    margin-left: 20px;
    margin-top: 7px;
  }
`;

export const InfoHeader = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #3A3A3A;

  span {
    margin-left: 10px;
  }
`;

export const Email = styled.input`
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  margin-top: 18px;
  height: 35px;
  width: 601px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #B4B4B4;
  }
`;

export const NotificationCheckBox = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 13px 12px 0px;
    gap: 10px;
    width: 419px;
    height: 58px;
`;

export const SaveButton = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 601px;
  height: 44px;
  background: #1988FF;
  border-radius: 6px;
  border: none;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export const Login = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline;
  color: #000000;
  cursor: pointer;
  float: right;
  margin-left: auto;
  margin-right: 10px;
`;

export const ContactBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 631px;
  height: 55px;
  background: #FFFFFF;
  box-shadow: 2px 2px 7px rgba(159, 159, 159, 0.25);
  border-radius: 6px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #3C4044;
    margin-left: 12px;
  }


`;

export const EditButton = styled.div`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #3C4044;
  float: right;
  margin-left: auto;

  span {
    margin-left: 0px;
    margin-right: 10px;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  &.topRow {
    margin-top: 18px;
  }
`;

export const FirstInput = styled.input`
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  height: 35px;
  width: 286px;
  margin-right: 15px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #B4B4B4;
  }
`;

export const LastInput = styled.input`
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  height: 35px;
  width: 286px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #B4B4B4;
  }
`;

export const AddressLine = styled.input`
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  height: 35px;
  width: 601px;
  margin-bottom: 12px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #B4B4B4;
  }
`;

export const ShippingDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 0px;
  gap: 10px;
  width: 613px;
  height: auto;
  border: 1px solid #DEE1E5;
  border-radius: 6px;
  margin-top: 12px;
`;

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #DEE1E5;
  width: 609px;
  height: 50px;
  align-items: center;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
    margin-bottom: 5px;
    margin-left: 18px;

    &.shippingDays {
      font-size: 12px;
      margin-left: 2px;
      margin-bottom: 4px;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ShippingCheckbox = styled.input`
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border: 1px solid #DEE1E5;
  margin-bottom: 8px;
  margin-left: 17px;
`;

export const ShippingPrice = styled.div`
  float: right;
  margin-left: auto;
  margin-right: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3C4044;
  margin-bottom: 5px;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 250px;
`;

export const OrderInfo = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 10px;

  span {
    float: right;
    margin-left: auto;
  }
`;

export const OrderTotal = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  margin-top: 30px;

  span {
    float: right;
    margin-left: auto;
    font-size: 38px;
    line-height: 46px;
  }
`;

export const PurchaseButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  background: #1988FF;
  border-radius: 6px;
  height: 44px;
  margin-top: 30px;
  width: 250px;
  border: none;
  cursor: pointer;
`;

export const PaymentDiv = styled(ShippingDiv)`
  border: 1px solid #A6A6A6;
`;

export const PaymentCheckbox = styled(ShippingCheckbox)`
  margin-top: 5px;
`;

export const PaymentContainer = styled(ShippingContainer)`
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
  background: #DEE1E5;
  margin-top: -10px;
`;

export const CardInfo = styled.input`
  width: 400px;
  height: 35px;
  background: #FFFFFF;
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  margin-left: 100px;
  margin-top: 12px;

  &.expiration {
    width: 200px;
  }

  &.cvv {
    margin-left: 15px;
    width: 180px;
  }

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    display: flex;
  }
`;

export const PromoCode = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const PromoCodeInput = styled.input`
  width: 540px;
  height: 35px;
  background: #FFFFFF;
  border: 1px solid #828A94;
  border-radius: 4px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    display: flex;
  }
`;

export const Product  = styled.div`
  display: flex;
  flex-direction: column
  border-top: 1px solid #DEE1E5;
  width: 609px;
  margin-top: 22px;
;`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OrderDetails = styled.div`
  display: flex; 
  flex-direction: column;
  margin-left: 12px;
  margin-top: 40px;
`;

export const ProductImage = styled.img`
  width: 141px;
  height: 141px;
  border: 1px solid #DEE1E5;
  margin-top: 40px;
`;

export const ProductName = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #3C4044;
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 22px;
`;

export const Platform = styled.span`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 75px;
height: 15px;
border: 4px solid #49A429;
border-radius: 0px 18px 18px 18px;
flex: none;
order: 2;
flex-grow: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 13px;
color: #49A429;
text-transform: uppercase;
margin-left: -154px;
background: #FFFFFF;
margin-top: -143px;
&.black {
  border: 4px solid #3C4044;
  color: #3C4044;
}
`;

export const Quantity = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #828A94;
  margin-top: 10px;
  margin-top: 40px;
`;

export const Price = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #3C4044;
  margin-top: 38px;
`;

export const CouponDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #DEE1E5;
  border-radius: 4px;
`;

export const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 35px;
  margin-left: 12px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    color: #3C4044;
    width: 150px;
    align-items: center;
    
    &.couponType {
      margin-left: 100px;
      margin-right: 28%;
  }

  input {
    width: 18px;
    height: 18px;
    float: right;
    margin-left: auto;

  }
`;
