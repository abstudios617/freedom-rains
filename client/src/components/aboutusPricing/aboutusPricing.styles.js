import styled from 'styled-components';

export const PriceItemWrapper = styled.div`
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

export const PriceTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

export const PriceSubtitle = styled.div`
  font-size: 22px;
  color: #008E3C;
  font-weight: 700;
`;

export const PriceHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 50px;
  flex-direction: column;
  align-items: center;
`;
