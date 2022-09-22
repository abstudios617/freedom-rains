import styled from 'styled-components';

export const Attribute = styled.input`
  width: 500px;
  height: 25px;
  padding: 5px 5px 5px 15px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  
  &::placeholder {
    font-weight: 400;
  }

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border-radius: 0 10px 10px 0;
    height: 38px;
    padding: 7px 5px 5px 5px;
    border: 1px solid #ced4da;
    width: 50px;
    border-left: none;
  }

  @media only screen and (max-width: 480px) {
    margin: 25px 0 15px;
  }
`;
