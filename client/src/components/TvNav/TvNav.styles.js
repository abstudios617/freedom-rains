import styled from 'styled-components';

export const TvNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TvNavItem = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #1988FF;
  cursor: pointer;
  margin-right: 40px;
  >* {
    text-decoration: none;
    color: #1988FF;
  }

  @media only screen and (max-width: 480px) {
    margin-right: 22px;
  }
`;

export const Vector = styled.img`
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }

  &.open {
    transform: rotate(180deg);
  }
`;
