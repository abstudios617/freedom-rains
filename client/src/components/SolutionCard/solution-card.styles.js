import styled from 'styled-components';

export const PlanYearly = styled.button`
  color: #848199;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(82, 67, 194, 0.230196);
  border: none;
  height: 50px;
  width: 90px;
  font-size: 14px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  &.yearlyActive {
    background: #008E3C;
    color: #fff;
  }
`;

export const PlanMonthly = styled.button`
  color: #848199;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(82, 67, 194, 0.230196);
  border: none;
  height: 50px;
  width: 90px;
  font-size: 14px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  &.monthlyActive {
    background: #008E3C;
    color: #fff;
  }
`;

export const PlanCardName = styled.div `
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PlanCardItemSol = styled.div `
  height: auto;
  width: 70%;
  padding: 50px;
  background: #ADD8E6;
  color: #fff;
  box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.295755);
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const PlanListSolName = styled.div `
  font-size: 13px;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  img {
    margin-right: 10px;
  }
`;

export const PlanCardButton = styled.button `
  background: transparent; 
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  background-color: skyblue;

  &.selected {
    background-color: blue; 
  }
`;

export const PlanCardContainer = styled.div `
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }
`;
