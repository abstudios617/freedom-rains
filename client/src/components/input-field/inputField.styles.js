import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  input {
    width: 400px;
    height: 30px;
    padding: 1%;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 5px;
    margin: 10px 0;
    font-family: "Montserrat", sans-serif;
    
    &::placeholder {
      font-weight: 400;
    }

    &.contact {
      background-color: #F0F0F0;
      border-radius: 0px; 
    }

    &.contactService {
      background-color: #F0F0F0;
      border-radius: 0px; 
      height: 120px; 
    }

    &.contactMessage {
      background-color: #F0F0F0;
      border-radius: 0px; 
      height: 50px;
    }

    @media only screen and (max-width: 480px) {
      width: 200px;
    }
  }
`;
