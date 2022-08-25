import styled from 'styled-components';

export const Header = styled.h1`
  display: none;

  @media only screen and (max-width: 480px) {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #3C4044;
    display: block;
  }
`;

export const CategoryHeader = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #3C4044;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Channel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;

  img {
    background-color: lightgrey;
    margin-top: 35px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 480px) {
      width: 80px;
      height: 80px;
      margin-top: 16px;
    }
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
    margin-top: 20px;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px) {
      font-size: 12px;
      line-height: 15px;
      text-align: center;
    }
  }
  
  @media only screen and (max-width: 480px) {
    margin-left: 32px;
  }
`;

export const ChannelContainer = styled.div`
  margin-top: 50px;
  overflow-x: hidden;
`;

export const Arrow = styled.img`
  margin-left: 50px;
  align-self: center;
  cursor: pointer;

  &.right {
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

