import styled from 'styled-components/macro';

export const Left = styled.div`
  width: 20%;
  margin: auto;
  color: white;
  p {
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-weight: bold;
    text-align: left;
    line-height: 12px;
    font-size: 12px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 35%;
    p {
      font-size: 10px;
    }
  }
`;

export const Right = styled.div`
  color: white;
  width: 70%;
  margin: auto;
  display: flex;
  p {
    text-align: left;
    font-size: 10px;
    font-weight: bold;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 55%;
    display: flex;
    p {
      font-size: 8px;
    }
  }
`;

export const Section = styled.div`
  color: white;
  width: 25%;
`;

export const Container = styled.div`
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
  padding: 0;

  hr {
    color: white;
    border: solid 1px white;
    margin: auto;
    display: flex;
    height: 100px;
  }

  .subResources {
    display: block;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

