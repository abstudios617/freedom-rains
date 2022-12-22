import styled from 'styled-components';

export const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    width: 200px;
    height: 220px;
    padding: 5px 10px;
    border-radius: 0.3rem;
    margin: 20px 10px;
    align-items: center;
  }

  &.videoBottom {
    border-radius: 0 0 10px 10px;
  }

  &.isMobile {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    > div {
      margin: 3%;
      width: 44%;
      padding: 0;
    }

    width: 100%;
    background: #fff;

    &.isMobile {
      display: flex;
    }

    &.isDesktop {
      display: none;
    }
  }
`;

export const TitleText = styled.div`
  display: flex;
  vertical-align: middle;

  &.allGames {
    margin-top: 40px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 12px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 20px 0 40px 30px;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin: 30px 0 10px;

    &.allGames {
      margin: 20px auto 10px;
    }
  }
`;

export const Sort = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 21px 16px 0 0;
  font-size: 11px;

  @media only screen and (max-width: 480px) {
    padding: 23px 10px 0 0;
    font-size: 11px;
  }
`;

export const SortImg = styled.img`
  height: 8px;
  padding: 1px 6px 0 0;

  @media only screen and (max-width: 480px) {
    height: 9px;
    padding: 2px 4px 0 0;
  }
`;

export const GameListView = styled.div`
  text-align: center;

  button {
    border-radius: 0;
    font-size: 12px;
    padding: 6px 25px;
    font-weight: 500;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
