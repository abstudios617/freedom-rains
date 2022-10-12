import styled from 'styled-components';

export const Filter = styled.div`
  width: 100%;
  height: 56px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FilterContainer = styled.div`
  margin-right: 5px;
`;

export const FilterTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #3C4044;
  margin-top: 18px;

  img {
    margin-left: 5px;
  }
`;

export const FilterItem = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;

  @media only screen and (max-width: 480px) {
    border-right: 1px solid #000;
    padding-right: 10px;
    width: auto;
  }
`;

export const FilterSelected = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const FilterRemove = styled.div`
  display: inline-block;
  margin-left: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: lowercase;
  &:hover {
    text-decoration: underline;
  }
`;

export const FilterLower = styled.span`
  text-transform: lowercase;
`;

export const ViewFilter = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: block;
    margin-bottom: 5%;
    
    > button {
      padding: 5px 20px 3px;
      font-size: 16px;
      border-radius: 0;
      background-color: rgb(0 0 0 / 0.05) !important;
      box-shadow: 0 3px 2px #333;
    }
  }
`;

export const ViewItems = styled.div`
  color: #559eff;
  font-size: 13px;
  font-weight: 700;
  padding-left: 10px;
  cursor: pointer;
  text-decoration: underline;
`;

export const ToggleFilter = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    display: none;

    &.filterSpacing {
      margin: 5% 0;
      padding: 2%;
      background: rgb(0 0 0 / 0.05);
      display: block;
    }
  }
`;

export const FilterItemContainer = styled.div`
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

