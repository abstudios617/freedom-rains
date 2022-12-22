import styled from 'styled-components/macro';

export const Coupon = styled.div`
  margin: 0 10px;
  width: 300px;
  height: 200px;
  min-width: 300px;
  min-width: 200px;
  position: relative;
  &:hover {
    box-shadow: 0 0 8px #404040;
    cursor: pointer;
  }
  
`;

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const Sponsored = styled.div`
  padding: 2px 5px;
  position: absolute;
  bottom: 28px;
  right: 18px;
  color: white;
  background-color: #FF524C;
  border-radius: 10px 10px 0 10px;
  width: fit-content;
`;

export const Body = styled.div`
  padding: 2% 0;
  margin: 5px 5px;
  text-align: left;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 10px;
  left: 10px;
  > * {
    display: flex;
    justify-content: space-between;
  }
  .price {
    font-weight: 900;
  }
  .wPrice {
    font-weight: 900;
    color: white;
  }
  .oldprice {
    text-decoration: line-through;
  }
`;

export const Hide = styled.input`
  position: absolute;
  left: -999em;
`;

