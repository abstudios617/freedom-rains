import styled from 'styled-components';

export const Content = styled.div`
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 1%;

  span {
    font-size: small;
  }
`;

export const SubContent = styled.div`
  line-height: 32px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }

  .subtitle {
    font-weight: 700;
    font-size: 15px;
    color: #fff;
  }

  &.selected {
    background: #fff;
    border-left: 2px solid #559eff;

    .subtitle {
      color: #000;
    }
  }
`;

export const Tabs = styled.div`
  width: 25%;
  background: #559eff;
  margin-right: 5%;
  height: 450px;

  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;

export const Select = styled.select`
  width: 413px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 15px;
  padding: 1%;
  margin: 10px 0;

  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

export const ContentWidth = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 2px;

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const AccountContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const SignIn = styled.div`
  font-family: 'Montserrat', sans-serif;                                              
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  line-height: 100%;
  vertical-align: top;
`;

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AccountCommContainer = styled.div``;
