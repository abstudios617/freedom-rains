import styled from 'styled-components';

export const DropdownList = styled.select`
  width: 410px;
  height: 40px;
  padding: 1%;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  &::placeholder {
    font-weight: 400;
  }

  &.feature {
    margin-bottom: 5%;
  }

  &.games {
    width: 340px;
    height: 35px;
    font-size: 11px;
    border-radius: 0;
    border: 1px solid #3C4044;
    margin-right: 30px;
  }

  @media only screen and (max-width: 480px) {
    width: 92%;

    &.games {
      width: 200px;
      font-size: 11px;
      margin-right: 0;
    }
  }
`;
