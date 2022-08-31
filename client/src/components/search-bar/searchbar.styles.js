import styled from 'styled-components';
// font-family: "Montserrat", sans-serif;
export const Attribute = styled.input`
  
  width: 100%;
  height: 25px;

  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
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
  border: 1px solid #ced4da;
  border-radius: 10px;
  button {
    border-radius: 0 10px 10px 0;
    height: 38px;
    border: 1px solid #ced4da;
    border-left: none;
  }

  @media only screen and (max-width: 480px) {
    margin: 25px 0 15px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .hideSearch {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 100%
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
  cursor: pointer;
`;
