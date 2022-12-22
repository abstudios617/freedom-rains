import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Statement = styled.div`
  border-radius: 10px;
  background: #fff;
  width: 350px;
  padding: 20px;
  line-height: 25px;
  margin-right: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  a {
    text-decoration: none;
  }
`;

export const Remove = styled.div`
  width: 350px;
  div {
    line-height: 25px;
  }
  form {
    border-radius: 0 0 10px 10px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top: none;
  }
`;

export const RemoveHeader = styled.div`
  padding: 20px;
  background: #ffa500;
  border-radius: 10px 10px 0 0;
  color: #fff;
  font-weight: 700;
`;

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  margin-bottom: 10px;
  img {
    width: 200px;
    margin: -30px 0 -30px -30px;
  }
`;

export const NoResize = styled.textarea`
  resize: none;
  width: 250px;
  height: 50px;
  display: block;
`;

export const Container = styled.div`
  @media only screen and (max-width: 480px) {
    padding: 5% !important;
  }
`;
