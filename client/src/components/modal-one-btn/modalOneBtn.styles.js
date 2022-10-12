import styled from 'styled-components';

export const Content = styled.div`
  background-color: white;
  border-radius: 5px;
`;

export const Icon = styled.div`
  background-color: #44B61C;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  padding: 10px 25px;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 30px;

  &.coupon {
    margin: 10px 0;
    background-color: white;
  }

  &.homepage {
    margin: 10px 0 40%;
    font-size: 30px;
  }

  &.homepageVideo {
    font-size: 18px;
    margin-top: 10px;
  }

  &.dailyMission {
    font-size: 13px;
  }

  &.games {
    font-size: 16px;
    color: #1988FF;
    font-weight: 700;
  }

  @media only screen and (max-width: 480px) {
    &.homepage {
      font-size: 13px;
      margin: 20px 0 30px;
    }

    &.games {
      font-size: 15px;
      color: #000;
    }
  }
`;

export const ModalText = styled.div`
  font-size: 18px;
  line-height: 2;
  padding: 2px 10px;
  background-color: white;
  border: none;
  border-radius: 5px;

  &.homepageVideo {
    font-size: 13px;
    margin-top: 6px;
  }

  &.dailyMission {
    font-size: 9px;
  }

  &.gamesErr {
    font-size: 14px;
    color: red;
    font-weight: 700;
  }

  @media only screen and (max-width: 480px) {
    &.gamesErr {
      font-size: 8px;
    }
  }
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.coupon {
    background: transparent;
  }

  &.games {
    padding: 10px;
    margin: 2% 4%;

    button {
      border-radius: 30px;
      padding: 0;
      font-size: 14px;
      height: 30px;
      width: 80px;
    }
  }

  @media only screen and (max-width: 480px) {
    &.games {
      margin: 0;

      button {
        padding: 7px 10px;
        font-size: 12px;
      }
    }
  }
`;

export const VideoContainer = styled.div`
  iframe{
    border-radius: 20px;
    width: 85%;
    height: 290px;
  }
`;

export const HomepageBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    border-radius: 30px;
    padding: 12px;
    margin: 8px 0 0;
    font-size: 12px;
    text-transform: uppercase;
    width: 70%;
  }
`;
