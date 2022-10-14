import styled from 'styled-components';

export const MarketItemWrapper = styled.div`
  display: flex;
  box-shadow: 3px 4px 3px rgb(0 0 0 / 50%);
  border-radius: 10px;
  margin: 70px 0;
  align-items: flex-start;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const MarketTitle = styled.div`
  font-size: 40px;
  font-weight: 700;

  &.marketSolutionTitle {
    font-size: 36px; 
  }
`;

export const MarketSubtitle = styled.div`
  font-size: 22px;
  color: #FF7143;
  font-weight: 700;
  
  &.marketSolutionSubTitle {
    font-size: 20px;
  }
`;

export const MarketHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 50px;
  align-items: center;
  > div {
    &:first-of-type {
      width: 70%;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    > div {
      &:first-of-type {
        width: 100%;
      }
    }
  }
`;
