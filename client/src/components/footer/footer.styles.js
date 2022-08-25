import styled from 'styled-components';

export const FullWidth = styled.div`
  background: #3C4044;
  position: absolute;
  bottom: 0;
  width: 100%;

  &.top {
    background: #1988FF;
    bottom: 155px;
  }

  @media only screen and (max-width: 480px) {
    position: relative;

    &.top {
      bottom: 0;
    }
  }
`;

export const Container = styled.div`
  background: #1988FF;
  width: 960px;
  padding: 20px;
  margin: 0 auto;

  &.bottom {
    background-color: #3C4044;
  }

  @media only screen and (max-width: 480px) {
    width: 92%;
    padding: 2% 4%;
  }
`;

export const Logo = styled.img`
  width: 70px;

  @media only screen and (max-width: 480px) {
    width: 35%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  flex-wrap: wrap;
  margin: 10px 40px;

  &.bottom {
    display: block;
    font-size: 12px;
    padding: 7px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #3C4044;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 2% 0;
    margin: 7% 0;

    &.bottom {
      margin: 4% 0;
      padding: 2% 0;
    }
  }
`;

export const Heart = styled.div`
  font-size: 11px;
  font-weight: 700;
  margin: 15px 0 16px;

  svg {
    color: #FF5757;
    font-size:12px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin: 5% 0 5%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 130px;

  @media only screen and (max-width: 480px) {
    width: 100%;

    &.mobile {
      display: none;
    }
  }
`;

export const DownloadLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SocialImgContainer = styled.div`
  background-color: #fff;
  border-radius: 6px; 
  height: 22px;
  width: 22px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 9px 12px 0;
  color: #1988FF;
  cursor: pointer;
  font-size: 12px;

  @media only screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
`;

export const IgFooterImg = styled.img`
  width: 110px;
  height: auto;
  cursor: pointer;
  margin: 0 0 10px;
  padding: 0;
`;

export const Section = styled.div`
  height: 220px;

  &.first {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    height: auto;

    &.first {
      display: inline;
    }

    &.last {
      display: none;
    }
  }
`;

export const TextSection = styled.div`
  @media only screen and (max-width: 480px) {
    &.mobile {
      display: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;

  &.business {
    text-align: center;
    font-size: 12px;
    background-color: #fff;
    color: #1988FF;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 2px #2e5885;
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    padding: 10px 0;
    margin: 0;

    &.business {
      font-size: 21px;
      padding: 12px 0;
      margin: 0 0 20px;
    }
  }
`;

export const IsMobile = styled.div`
  display: none;

  svg {
    font-size: 20px;
  }

  @media only screen and (max-width: 480px) {
    display: inline;
  }
`;

export const Text = styled.div`
  font-size: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
  
  @media only screen and (max-width: 480px) {
    font-size: 16px;
    margin: 8px 0 15px;
  }
`;

export const Copyright = styled.div`
  font-size: 10px;
  margin: 10px 0 0;

  @media only screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Line = styled.div`
  border-left: 1px solid #4EA3FF;
  height: 110px;

  @media only screen and (max-width: 480px) {
    border-bottom: 1px solid #4EA3FF;
    width: 75%;
    height: 0;
    margin: 5px 0;

    &.mobile {
      display: none;
    }
  }
`;
