import styled from 'styled-components';

export const MinusButton = styled.button`
  padding-bottom: 6px;

  &.cartPage {
    border-radius: 50%;
  }
`;

export const PlusButton = styled.button`
  padding-top: 4px;
`;

export const QuantityTitle = styled.span`
  width: 84px;
  height: 27px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #828A94;

  &.cartPage {
    display: none;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 175px;
  height: 30px;
  background: #FFFFFF;
  flex: none;
  order: 1;
  flex-grow: 0;

  button {
    width: 70px;
    height: 30px;
    align-items: center;
    border: none;
    background: #FFFFFF;

    &:hover {
      cursor: pointer;
    }
  }

  &.cartPage {
    width: 141px;
    height: 32px;
    border: 1px solid black;
    border-radius: 4px;
  }

`;

export const Number = styled.span`
  margin: 0px 15px;
  width: 8px;
  height: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #3C4044;

  &.cartPage {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #3C4044;
    margin-top: 7px;
  }
`;
