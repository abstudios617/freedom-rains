import styled from 'styled-components';

export const VerticalCarousel = styled.div`
  width: 130px;
  height: auto;
  margin-top: 80px;
  text-align: center;
  
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ArrowImg = styled.img`
  width: 131px;
  height: auto;
  cursor: pointer;

  &.noCursor {
    cursor:not-allowed;
  }
`;
