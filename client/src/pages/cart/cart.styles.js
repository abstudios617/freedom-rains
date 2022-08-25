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

    &.first {
      margin-left: 0px;
    }
  }
`;
