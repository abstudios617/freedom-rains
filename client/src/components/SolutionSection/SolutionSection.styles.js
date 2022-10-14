import styled from 'styled-components';

export const SolutionButtonContainer = styled.div`
  text-align: center;

`;

export const MarketingItemsContainer = styled.div`
  box-shadow: 3px 4px 3px rgb(0 0 0 / 50%);
  border-radius: 10px;
  margin: 70px 0;

@media only screen and (max-width: 480px) {
  flex-direction: column;
  box-shadow: none;
  border-radius: 0;
}
`;
