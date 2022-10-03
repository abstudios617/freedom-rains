import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 50%;
  height: 100px;
  display: none;
  align-items: center;
  img {
    width: auto;
    height: 200px;
    cursor: pointer;
    margin: -50px auto 0;
  }

  @media only screen and (max-width: 480px) {
    display: grid;
    width: 70%;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
      margin: -50px auto;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 4%;
    div {
      width: 35px;
      height: 5px;
      background: #559eff;
      margin: 4px 0;
      box-shadow: 2px 2px #000;
    }
  }
`;

export const MobileX = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 4%;
    font-size: 48px;
    font-weight: 600;
    color: #559eff;
    text-shadow: 2px 2px #000;
  }
`;

export const AdPlacement = styled.div`
  width: 100%;
    
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const FullWidth = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
  }
`;

export const NavWidth = styled.div`
  
  @media only screen and (max-width: 480px) {
    background-color: #fff;
    height: 90vh;
    overflow-y: scroll;

    &.closed {
      background-color: none;
      height: auto;
      overflow-y: hidden;
    }
  }
`;

export const NavContainer = styled.div`
  z-index: 12;
  width: 100%;
  margin: 0 auto;
  height: 127px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  

  width: 800px;
  margin: 0 auto;

  .hideSearch {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 100%
  }
`;
