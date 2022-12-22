import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  .prev {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 900;
  }
  
  .next {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 900;
  }
  
  .num {
    padding: 0 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 900;
    margin: 0px 20px;
  }
  
  .disabled {
    display: none;
  }
  
  .paginate {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  
  .active {
    color: #1988FF;
    font-weight: 900;
  }
`;

export const SearchItems = styled.div`
  margin-bottom: 30px;
`;

export const Keyword = styled.div`
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 700;
  padding: 20px;

  span {
    font-weight: 300;
    font-style: italic;
  }
`;
