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
  }
  
  .next {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
  }
  
  .num {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
  }
  
  .disabled {
    cursor: text;
    color: rgba(0, 0, 0, 0.3);
  }
  
  .paginate {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  
  .active {
    background: #559eff;
    color: #fff;
    font-weight: 700;
  }
`;

export const SearchItems = styled.div`
  top: 80px;
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
