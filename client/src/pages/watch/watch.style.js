import styled from 'styled-components';

export const Subcontent = styled.div`
  line-height: 32px;
  margin-top: 10px;
  text-align: center;

  .showName {
    text-align: left;
    color:red;
    padding-left: 20px;
    width: 380px;
  }

  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  .header {
    background-color: rgba(85, 158, 255, 0.6);
  }
`;

export const AppChoice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  button {
    padding: 10px;
  }
`;

export const Show = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  width: 400px;

  @media only screen and (max-width: 480px) {
    width: 420px;
  }
`;

export const App = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  width: 200px;

  .header {
    background-color: rgba(85, 158, 255, 0.6);
  }
`;
