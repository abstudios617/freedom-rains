import styled from 'styled-components';

export const PlanYearly = styled.button`
  color: #848199;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(82, 67, 194, 0.230196);
  border: none;
  height: 50px;
  width: 120px;
  font-size: 14px;
  border-radius: 22px 0 0 22px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  &.yearlyActive {
    background: #008E3C;
    color: #fff;
    border-radius: 22px 0 0 22px;
  }
`;

export const PlanMonthly = styled.button`
  color: #848199;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(82, 67, 194, 0.230196);
  border-radius: 0 22px 22px 0;
  border: none;
  height: 50px;
  width: 120px;
  font-size: 14px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  &.monthlyActive {
    background: #008E3C;
    color: #fff;
    border-radius: 0 22px 22px 0;
  }
`;
