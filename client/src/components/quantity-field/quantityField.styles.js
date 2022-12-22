import styled from 'styled-components';

export const MinusButton = styled.button`
  padding-bottom: 6px;
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
      border: 1px solid #E0E0E0;
    }
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
`;
