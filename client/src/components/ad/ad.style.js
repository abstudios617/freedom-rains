import styled from 'styled-components';

export const Wrapper = styled.div`
  order: -1;
`;

export const AdImg = styled.img`
  width: 300px;
  cursor: pointer;
`;

export const AdTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 30px;
`;

export const AdDescription = styled.div`
  font-size: 15px;
  padding: 0 0 30px 5px;
`;

export const AdImageTwo = styled.img`
  width: 100%;
  border-radius: 10px;

  @media only screen and (max-width: 480px) {
    border-radius: 0;
    width: 70%;
  }
`;

export const AdImageContainer = styled.div`
  width: 43%;
  margin: 0 20px;

  @media only screen and (max-width: 480px) {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 230px;
  padding: 20px 10px;
  margin: 60px 15px;
  box-shadow: 3px 3px 12px 0px #646464;
  border-radius: 10px;
  
  &.coupon {
    justify-content: space-evenly;
    width: 100%;
    height: 150px;
    padding: 20px 0;
    margin: 20px 0;
    box-shadow: none;
    border-radius: 0;
  }

  button {
    font-size: 14px;
    border-radius: 20px;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 96%;
    padding: 0 2%;
    display: grid;
    box-shadow: 0 0;
    margin: 60px 0;

    button {
      padding: 8px;
      font-size: 8px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  margin: 0 20px;

  &.homepageTopBtn {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 5px;

    &.homepage {
      display: none;
    }

    &.homepageTopBtn {
      display: flex;
    }

    button {
      margin-right: 10px;
      font-size: 12px;
      padding: 13px;
    }
  }
`;
