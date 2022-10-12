import styled from 'styled-components/macro';

export const Section = styled.div`
  width: 20%;
  margin: auto;
  color: white;
  p {
    font-weight: bold;
    text-align: center;
    line-height: 12px;
    font-size: 12px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: none;
  position: absolute;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%, 10px);
  background-color: #559EFF;
  width: 960px;
  height: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0 70px;

  hr {
    color: white;
    border: solid 1px white;
    margin: auto;
    display: flex;
    height: 100px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 150px;
    padding: 0 20px;
  }
`;

