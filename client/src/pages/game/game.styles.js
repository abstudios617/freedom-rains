import styled from 'styled-components';

export const GameText = styled.div`
  width: 300px;

  @media only screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    margin: 0 10px;
  }
`;

export const GameAd = styled.div`
  width: 300px;

  iframe {
    padding: 0;
    border-radius: 0;
    background: none;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const BtnGame = styled.div`
  width: 45%;
  margin: 80px 40px 0;
  text-align: center;
  position: relative;
  
  button {
    margin: 15px 0;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

export const GameDisplay = styled.div`
  display: flex;

  .videos {
    width: 22%;
    border-radius: 10px 10px 0 0;
  }

  @media only screen and (max-width: 480px) {
    display: block;
  }
`;

export const GameImg = styled.img`
  object-fit: cover;
  width: 90px;
  height: 90px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  margin: 20px 0 47px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const HomeRedirect = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

export const GameRedirect = styled.div`
  font-size: 12px;
`;

export const GameTitle = styled.div`
  font-size: 22px;
  margin: 10px 0 40px;
  font-weight: 700;
  color: #1988FF;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin: 3px 0 10px 0;
  }
`;

export const RulesTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const Rules = styled.div`
  font-size: 12px;
  margin-bottom: 40px;

  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const DesktopRules = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const MobileRules = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0 20px 0 10px;
    display: block;
  }
`;

export const MobileGameBtn = styled.img`
  display: none;

  @media only screen and (max-width: 480px) {
    display: block;
    position: absolute;
    width: 45px;
    height: 45px;
    object-fit: cover;
    cursor: pointer;
    top: 10px;

    &.home {
      left: 10px;
    }

    &.fullscreen {
      right: 10px;
    }

    &.homeFS {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 110;
    }

    &.fullscreenFS {
      position: fixed;
      right: 0;
      top: 0;
      z-index: 110;
      width: 55px;
      height: 55px;
    }
  }
`;
