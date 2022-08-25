import styled from 'styled-components/macro';

export const NavSection = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  justify-content: flex-end;
  > li {
    width: auto;
    list-style: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    > span {
      cursor: pointer;
      color: #1988FF;
      font-weight: 900;
    }
  }
  @media only screen and (max-width: 480px) {
    &.shop {
      display: none;
      position: absolute;
    }
  }
`;

export const Coupons = styled.li`
  &:hover {
    .subCoupons {
      display: block;
    }
  }
`;

export const Resources = styled.li`
  
  text-align: center;
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      transform: rotate(180deg);
    }
    >* {
      display: flex;
    }
  }
`;

export const NavContainer = styled.div`
  z-index: 12;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 80px;
  order: -1;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    order: 2;
  }
`;

export const ArrowUp = styled.div`
  display: none;
  position: absolute;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #559EFF;
  transform: translate(30px);
`;


