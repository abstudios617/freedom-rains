import styled from 'styled-components';


export const CustomerServiceContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  min-height: 200vh;
  max-height: 350vh;
`;

export const GoodMorningContainer = styled.div`
  margin-bottom: 2.5%;
  font-family: "Bernhard", sans-serif;
  height: 6%;
  background-color: lightgreen;
  color: white;
  border-radius: 10px;
  h3 {
    font-size: 18px;
    font-weight: 1000;
    margin-left: 2%;
  }
`;

export const AccordionContainer = styled.div` 
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    height: fit-content;
    h2{
      background-color: lightgreen;
      color: white;
      padding: 2%;
      font-size: 18px;
    }
    p{
      font-family: "Bernhard", sans-serif;
    }

`;

export const FormContainer = styled.div`
    font-family: "Bernhard", sans-serif;
    form {
      display: flex;
      flex-direction:column;
      justify-content: center;
      div {
        display:flex;
        flex-direction:column;
        margin-bottom: 2%;
      }
      h3{
        display:flex;
        align-items: center;
        font-weight: 900;
      }
      label {
        font-weight: 600;
       
      }
      input {
        width: 40%;
        height: 20px;
      }
      select {
        width: 40%;
        height: 20px;
      }
      textarea{
        height: 150px;
      }
      img {
        padding-right: 1%;
        margin-bottom: .5%;
        height: 20px;
      }
    }
`;

export const SearchContainer = styled.div`
  margin-left: 2.5%;
  margin-right: 2.5%;
  position: relative;
  height: 50px;
  div {
    display:flex;
    width: 100%;
    position: absolute;
    img {
      height: 20px;
      position: absolute;
      right: 0;
      padding: .5%;
    }
  }
  input {
    width: 100%;
    height: 24px; 
  }
`;


export const Tip1 = styled.div`
  color: white;
  background-color: red;
  height: 120px;
  padding: 2%;
  border-radius: 15px;
  margin-bottom: 2%;
`;


export const Tip2 = styled.div`
  border: 3px solid red;
  color: red;
  padding: 2%;
  border-radius: 15px;
  margin-bottom: 2%;
`;

export const Helpful = styled.div`
  display:flex;
  flex-direction: column;
  padding: 2%;
  height: 150px;
  div {
    display:flex;
    justify-content: space-around;  
  }
`;




