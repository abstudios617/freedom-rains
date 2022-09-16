import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  input {
    width: 400px;
    height: 40px;
    padding: 2.5%;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    background-color: #fff;
    border: 2px solid gray;
    border-radius: 0px;
    margin: 10px 0;
    font-family: "Montserrat", sans-serif;
    
    &::placeholder {
      font-weight: 400;
      color: gray;

    }

    @media only screen and (max-width: 480px) {
      width: 200px;
    }
  }
`;
