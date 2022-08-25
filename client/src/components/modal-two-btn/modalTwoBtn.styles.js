import styled from 'styled-components/macro';

export const PromoImg= styled.img`
  width: 40%;
  height: auto;

  &.homepageMobileImg {
    display: none;
  }

  &.dailyMission {
    border-radius: 100%;
    width: 130px;
    height: 130px;
  }

  @media only screen and (max-width: 480px) {
    &.homepage {
      display: none;
    }

    &.homepageMobileImg {
      width: 70%;
      height: auto;
      display: flex;
    }
  }
`;

export const ImgContainer = styled.div`
  &.dailyMission {
    margin: 10px 0;
  }

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
  }
`;

export const FlexContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1%;

  button {
    border-radius: 0;
    margin-bottom: 20px;
    width: 100%;
    padding: 15px;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  margin-right: 20px;

  button {
    font-size: 13px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right: 15px;

    button {
      font-size: 9px;
    }
  }
`;

export const XImg = styled.img`
  width: 60px;
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: 480px) {
    width: 8%;
  }
`;

export const DailyMission = styled.div`
  button {
    border-radius: 30px;
    padding: 8px;
    margin-top: 8px;
    font-size: 11px;
    width: 90%;
    text-transform: uppercase;
  }
`;
