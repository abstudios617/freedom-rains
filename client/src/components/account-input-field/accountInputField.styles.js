import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  margin-left: 2em;  

  input {
    display: flex;
    flex-direction: column;

    width: 360px;
    height: ${props => (props.show !== false) ? '15px' : '0'};
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
    
    display: ${props => (props.show) ? 'flex' : 'none'};
    flex-direction: row;

    &::placeholder {
      font-weight: 800;
      color: gray;
    }

    @media only screen and (max-width: 480px) {
      width: 200px;
    }
  }

  div {
    font-size: small;
    margin-bottom: 10px;
    
    display: ${props => (props.show) ? 'flex' : 'none'};
    flex-direction: row;
  }
`;

export const InputFieldOptions = styled.div`
  margin-left: 42.5%;
  width: 50%;

  display: flex;
  flex-direction: row;
`;

export const InputFieldButton = styled.div`
  border-radius: 1em;
  width: fit-content;
  padding: 1em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &.cancel {
    background-color: white;
    text-decoration: underline;
    &:hover {
      color: rgba(0, 0, 0, 80%);
    }
  }

  &.save {
    background-color: white;
    border: 2px solid #49a429;
    color: #49a429;
    &:hover {
      color: white;
      background-color: #49a429;
    }
  }
`;
