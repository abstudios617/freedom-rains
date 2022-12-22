import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 40px auto;
  width: 400px;

  img {
    width: 100px;
    height: 100px;
  }
  > div {
    position: relative !important;
  }

  .bar {
    > div {
      border-radius: 15px;
    }
  }

  .moveBehindModal {
    z-index: 0 !important;
  }
`;

