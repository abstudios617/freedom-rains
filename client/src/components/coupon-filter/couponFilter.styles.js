import styled from 'styled-components/macro';

export const Coupon = styled.div`
  margin: 0 2% 20px;
  width: 200px;
  min-width: 200px;
  position: relative;
  &:hover {
    box-shadow: 0 0 8px #404040;
  }
`;

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    z-index: 10;
  }
`;

export const Description = styled.div`
  z-index: 10;
  position: absolute;
  left: 10px;
  top: -5px;
  color: #fff;
  font-size: 10px;
  width: 25px;
  font-weight: 700;
  background: #1988FF;
  border-radius: 5px 0px 2px 2px;
  padding: 10px 5px;
  height: 25px;
  font-family: "Bernhard", sans-serif;
`;

export const TopRight = styled.div`
  position: absolute;
  right: -3px;
  top: 0;
  width: 3px;
  background: #1988FF;
  border-radius: 0 5px 0 0;
  height: 5px;
`;

export const Sponsored = styled.div`
  padding: 2px 5px;
  position: absolute;
  bottom: 52px;
  right: -5px;
  color: white;
  background-color: #FF524C;
  border-radius: 10px 10px 0 10px;
  width: fit-content;
`;

export const Body = styled.div`
  padding: 2% 0;
  margin: 5px 5px;
  text-align: left;
  position: relative;
  > * {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 16px;
    font-weight: 900;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
  }
  .price {
    font-weight: 900;
  }
  .oldprice {
    text-decoration: line-through;
  }
`;

export const Code = styled.div`
  background: #1988FF;
  font-weight: 700;
  color: #fff;
  border-radius: 25px;
  font-size: 15px;
  padding: 9px 10px 5px;
  cursor: pointer;
  height: 23px;
  width: 80px;
  text-align: center;
  overflow-wrap: break-word;
  margin: 10px auto;

  &:hover {
    box-shadow: 0 2px 2px #777777;
  }
`;

export const Hide = styled.input`
  position: absolute;
  left: -999em;
`;

export const DealBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px;
`;

export const Alert = styled.button`
  color: #b7211a;
  cursor: pointer;
  font-size: 10px;
  position: relative;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  background: transparent;
  border: none;
  width: 100%;
`;

export const Expire = styled.div`
  color: #b7211a;
  font-size: 14px;
  position: relative;
  font-weight: 700;
  padding: 4px 0 10px;
  text-align: center;
`;

export const Star = styled.img`
  position: relative;
  top: 4px;
  right: 4px;
  width: 20px;
`;
