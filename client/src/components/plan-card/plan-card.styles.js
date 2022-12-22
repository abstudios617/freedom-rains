import styled from 'styled-components';

export const PlanCardItem = styled.div`
  height: auto;
  width: 30%;
  padding: 15px;

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-bottom: 20px;
  }

  &.marketPopular,
  &.pricePopular {
    background: #FF7143;
    color: #fff;
    box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.295755);
    border-radius: 26px;
    margin-top: -50px;

    @media only screen and (max-width: 480px) {
      margin-top: 0;
    }
  }

  &.pricePopular {
    background: #1254FF;
  }

  .active {
    color: #fff;
    font-weight: 700;
  }
`;

export const PlanCardAmount = styled.span`
  font-weight: 700;
  color: #000;
  font-size: 34px;
  margin-right: 5px;
`;

export const PlanCardItemSpecs = styled.div`
  height: auto;
  margin-bottom: 20px;
`;

export const PlanCardMonthly = styled.div`
  color: #848199;
  font-size: 17px;
  margin-bottom: 10px;
`;

export const PlanCardPlan = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PlanCardBtn = styled.div`
  text-align: center;
`;

export const PlanCardMP = styled.div`
  background: #B33148;
  border-radius: 13.5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #FFFFFF;
  height: 27px;
  width: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const PlanCardMPContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PlanCardDescription = styled.div`
  color: #848199;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PlanCardListItem = styled.div`
  font-size: 13px;
  color: #848199;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  
  img {
    margin-right: 10px;
  }
`;
