import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  input {
    display: flex;
    flex-direction: column;

    width: 360px;
    height: 15px;
    padding: 2.5%;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 0px;
    margin: 10px 0;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 2px 5px lightgray;
    
    &::placeholder {
      font-weight: 800;
      color: gray;
    }

    @media only screen and (max-width: 480px) {
      width: 200px;
    }
  }
`;

export const ExtraStyle = styled.div` 
  span {
    font-size: small;
  }

  margin-bottom: 10px;
`;
